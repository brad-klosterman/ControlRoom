import { useNavigate } from 'react-router-dom';

import { Logo, Text } from 'components';
import { CloudBoxIps, useOfflineContext } from 'src/offline/offline.provider';

import {
  LogoContainer,
  Container,
  ContentContainer,
  StyledTable,
  TextLink,
} from './styles';

interface OfflineIpsTableProps {
  cloudBoxIps: CloudBoxIps[];
}

const IpLink = ({ ip }: { ip: string | null }) => {
  if (!ip) {
    return;
  }

  return (
    <TextLink href={`http://${ip}:8000`} target="blank" variant="primary">
      {ip}
    </TextLink>
  );
};

const OfflineIpsTable = ({ cloudBoxIps }: OfflineIpsTableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>ID</td>
          <td>IP Address</td>
          <td>Alternative IP</td>
        </tr>
      </thead>
      <tbody>
        {cloudBoxIps.map((box, i) => {
          if (!box.ip1 && !box.ip2) {
            return;
          }

          return (
            <tr key={`ip-${i}`}>
              <td title={`${box.id}`}>{i + 1}</td>
              <td>
                <IpLink ip={box.ip1} />
              </td>
              <td>
                <IpLink ip={box.ip2} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

const OfflineLinksRoute = () => {
  const navigate = useNavigate();

  const {
    state: { cloudBoxIps },
  } = useOfflineContext();

  const clickHandler = () => {
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ContentContainer>
        <Text size="displayLarge">Offline Mode Links</Text>
        <OfflineIpsTable cloudBoxIps={cloudBoxIps} />
        <TextLink onClick={clickHandler}>&lt; Back to Online Login</TextLink>
      </ContentContainer>
    </Container>
  );
};

export { OfflineLinksRoute };
