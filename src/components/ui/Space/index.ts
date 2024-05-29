import styled from 'styled-components';
import { mapSides } from 'utils';

interface SpaceProps {
  margin: Parameters<typeof mapSides>[0];
}

const Space = styled.div<SpaceProps>`
  margin: ${({ margin }) => mapSides(margin)};
`;

export default Space;
