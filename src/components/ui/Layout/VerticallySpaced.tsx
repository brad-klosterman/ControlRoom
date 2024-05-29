import styled from 'styled-components';

const VerticallySpaced = styled.div`
  > *:not(:first-child) {
    margin-top: 1rem;
    width: 100%;
  }
`;

export { VerticallySpaced };
