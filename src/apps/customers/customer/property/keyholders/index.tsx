import { useMutation } from '@apollo/client';
import { Fragment, memo, useState } from 'react';

import { PROPERTY_PROFILE_KEYHOLDER } from 'apps/customers/API';
import { UPDATE_PROPERTY_KEYHOLDER_ORDER } from 'apps/customers/API/property/keyholders';
import { useProperty } from 'apps/customers/customer/property/provider';
import { SubRouteWrap } from 'apps/dashboard/style';
import { getFragment } from 'codegen';
import { Button, Flex } from 'components';
import { Expander } from 'components/ui/Expander';
import { useCanUpdateCustomers } from 'src/app.state/permissions/hooks/update-customers.permission';

import ExpandedContent from './expanded';
import KeyholderRow from './row';

const moveArrayIndex = <T,>(
  arr: T[],
  fromIndex: number,
  toIndex: number,
): T[] => {
  const newArray = [...arr];
  const element = newArray[fromIndex];
  newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, element);
  return newArray;
};

const PropertyKeyholdersRoute = () => {
  /** Permissions **/
  const edit_permissions = useCanUpdateCustomers();

  const { customer_id, dispatch, property } = useProperty();

  const keyholders = property?.keyholders
    ? property?.keyholders.map(k => {
        return getFragment(PROPERTY_PROFILE_KEYHOLDER, k);
      })
    : [];

  const sorted_keyholders = keyholders.sort(
    (a, b): number => (a?.call_order ?? 0) - (b?.call_order ?? 0),
  );

  const [creating_keyholder, setCreatingKeyholder] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | undefined>();
  const [dropIndex, setDropIndex] = useState<number | undefined>();

  const [update_property_keyholder_call_order] = useMutation(
    UPDATE_PROPERTY_KEYHOLDER_ORDER,
  );

  const resetDragging = () => {
    setDropIndex(undefined);
    setDragIndex(undefined);
  };

  const updateKeyholderOrder = async (
    drag_index: number,
    drop_index: number,
  ) => {
    if (drag_index === drop_index) {
      // The element went back to the same spot: do nothing
      return;
    }

    const keyholder_ids = sorted_keyholders.map(keyholder => keyholder.id);

    const updated_keyholder_ids = moveArrayIndex(
      keyholder_ids,
      drag_index,
      drop_index,
    );

    if (customer_id)
      await update_property_keyholder_call_order({
        variables: {
          customer_id,
          keyholder_ids_priority: updated_keyholder_ids,
          property_id: property?.id as number,
        },
      });

    await dispatch('FETCH_PROPERTY', { id: property?.id });
    resetDragging();
  };

  const handleDragStart = (idx: number) => {
    return (event: Event) => {
      event.stopPropagation();
      setDragIndex(idx);
    };
  };

  const handleDragEnter = (idx: number) => {
    return (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      setDropIndex(idx);
    };
  };

  const handleDragLeave = (idx: number) => {
    return (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      setDropIndex(idx);
    };
  };

  const handleDragEnd = async (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    if (dragIndex !== undefined && dropIndex !== undefined) {
      await updateKeyholderOrder(dragIndex, dropIndex);
    }
  };

  const startCreateKeyholder = () => {
    setCreatingKeyholder(true);
  };

  if (!sorted_keyholders || !property) {
    return null;
  }

  return (
    <SubRouteWrap
      direction="column"
      gap="large"
      style={{ overflow: 'overlay' }}
    >
      {creating_keyholder ? (
        <ExpandedContent
          closeCreateKeyholder={() => setCreatingKeyholder(false)}
          creating_keyholder={true}
          customer_id={customer_id as number}
          index={sorted_keyholders.length}
          property_id={property.id}
          refetch={() => dispatch('FETCH_PROPERTY', { id: property?.id })}
        />
      ) : (
        <Flex direction="column" fitWidth gap="large">
          <Expander aria-label="customer-subscriptions">
            {keyholders &&
              keyholders.map((keyholder, index) => (
                <Fragment key={keyholder.id}>
                  <KeyholderRow
                    dropIndex={dropIndex!}
                    handleDragEnd={handleDragEnd}
                    handleDragEnter={handleDragEnter(index)}
                    handleDragLeave={handleDragLeave(index)}
                    index={index}
                    is_dragging_disabled={!edit_permissions}
                    keyholder={keyholder}
                    onDragStart={handleDragStart(index)}
                  />
                  <ExpandedContent
                    creating_keyholder={false}
                    customer_id={customer_id as number}
                    index={index}
                    keyholder={keyholder}
                    property_id={property.id}
                    refetch={() =>
                      dispatch('FETCH_PROPERTY', { id: property?.id })
                    }
                  />
                </Fragment>
              ))}
          </Expander>
        </Flex>
      )}
      {!creating_keyholder && (
        <Flex alignItems="flex-end" fluid justifyContent="flex-end">
          <Button disabled={!edit_permissions} onClick={startCreateKeyholder}>
            CREATE KEYHOLDER
          </Button>
        </Flex>
      )}
    </SubRouteWrap>
  );
};

export default memo(PropertyKeyholdersRoute);
