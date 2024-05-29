import { useMutation, useQuery } from '@apollo/client';
import { memo, useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ASSIGN_AGENT_AREAS_DOCUMENT,
  FETCH_AREAS_STATUS_DOCUMENT,
  UNASSIGN_AGENT_AREAS_DOCUMENT,
} from 'codegen/graphql';
import { Button, Flex, Switch, Text } from 'components';
import { AuthSessionStorage } from 'src/app.state/auth/auth.session.storage';
import { useAuthContext } from 'src/app.state/auth/provider';

import {
  Container,
  Continue,
  Elements,
  Overlay,
  Table,
  TableHeader,
  TableItem,
  TableRow,
} from './styles';

const AreasRoute = () => {
  const {
    state: { user },
  } = useAuthContext();

  const navigate = useNavigate();

  const { data, error, loading } = useQuery(FETCH_AREAS_STATUS_DOCUMENT, {
    skip: !user?.id,
  });

  const areas = useMemo(
    () => data?.fetch_areas_status.areas || [],
    [data?.fetch_areas_status.areas],
  );
  const [assigned_areas, setAssignedAreas] = useState<number[]>([]);
  const prev_assigned_areas_ref = useRef<number[]>([]);
  const [is_busy, setIsBusy] = useState(false);

  const [assignAgentAreas] = useMutation(ASSIGN_AGENT_AREAS_DOCUMENT, {
    variables: {
      areas: assigned_areas,
    },
  });

  const [unassignAgentAreas] = useMutation(UNASSIGN_AGENT_AREAS_DOCUMENT, {
    variables: {
      areas: assigned_areas,
    },
  });

  useEffect(() => {
    if (areas) {
      const session_areas = AuthSessionStorage.getAgentAreas();

      if (session_areas === undefined) {
        setAssignedAreas(areas.map(area => area.id));
      }

      if (session_areas?.length) {
        setAssignedAreas(session_areas);
        prev_assigned_areas_ref.current = session_areas;
      }
    }
  }, [areas.length]);

  const onToggleArea = (id: number) => {
    const index = assigned_areas.indexOf(id); // <-- Not supported in <IE9

    if (index !== -1) {
      setAssignedAreas(assigned_areas.filter(v => v !== id));
    } else {
      setAssignedAreas(prev => [...prev, id]);
    }
  };

  const onSelectAll = (event: any) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setAssignedAreas(areas.map(area => area.id));
    } else {
      setAssignedAreas([]);
    }
  };

  // TODO
  // IF YOU CAN VIEW ALARMS YOU HAVE FULL FUNCTIONALITY!!!!
  const onContinue = async () => {
    setIsBusy(true);
    await assignAgentAreas();

    const removedAreas: Array<number> = [];

    prev_assigned_areas_ref.current.forEach((prevWatchedArea: number) => {
      if (!assigned_areas.includes(prevWatchedArea)) {
        removedAreas.push(prevWatchedArea);
      }
    });

    if (removedAreas)
      await unassignAgentAreas({
        variables: {
          areas: removedAreas,
        },
      });

    prev_assigned_areas_ref.current = assigned_areas;

    AuthSessionStorage.setAgentAreas(assigned_areas);

    navigate('/control_room/alarms');
  };

  if (error) return null;

  return (
    <Container alignItems="center" justifyContent="center">
      <Overlay />
      <Elements>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          style={{ width: '100%' }}
        >
          <Text size="displayRegular">Select Working Areas</Text>
          <Flex alignItems="center" gap="regular">
            <Text size="displaySmall">Select All</Text>
            <Switch
              checked={areas.length === assigned_areas.length}
              name="select-all"
              onChange={event => onSelectAll(event)}
            />
          </Flex>
        </Flex>
        <Table>
          <TableHeader>
            <TableItem>
              <Text size="displayRegular">AREA</Text>
            </TableItem>
            <TableItem>
              <Text size="displayRegular">RESPONSIBLE AGENTS</Text>
            </TableItem>
            <TableItem>
              <Text size="displayRegular">ACTIVE ALARMS</Text>
            </TableItem>
            <TableItem style={{ justifyContent: 'flex-end', width: '10%' }}>
              <Text size="displayRegular">WATCH</Text>
            </TableItem>
          </TableHeader>

          {loading && (
            <TableRow>
              <Text size="displayLarge">LOADING AREAS...</Text>
            </TableRow>
          )}

          {areas.map(a => (
            <TableRow key={a.id}>
              <TableItem>
                <Text>{a.description}</Text>
              </TableItem>
              <TableItem>
                <Text>{a.assigned_agents_count}</Text>
              </TableItem>
              <TableItem>
                <Text>{a.active_alarms_count}</Text>
              </TableItem>
              <TableItem
                style={{
                  justifyContent: 'flex-end',
                  marginRight: '1rem',
                  width: '10%',
                }}
              >
                <Switch
                  checked={assigned_areas.indexOf(a.id) !== -1}
                  name={a.id.toString()}
                  onChange={() => onToggleArea(a.id)}
                  value={a.id}
                />
              </TableItem>
            </TableRow>
          ))}
        </Table>
        <Continue>
          <Button isLoading={is_busy} onClick={onContinue}>
            CONTINUE TO CONTROL ROOM
          </Button>
        </Continue>
      </Elements>
    </Container>
  );
};

export default memo(AreasRoute);
