import { Text } from 'src/components';
import styled, { css } from 'styled-components';

namespace RegenerateModalStyles {
  export const WarningText = styled(Text)(
    ({ theme }) => css`
      border-color: ${theme.colors.text.primary};
      border-radius: 0.5rem;
      border-style: solid;
      border-width: 1px;
      padding: 1rem;
    `,
  );
}

export { RegenerateModalStyles };
