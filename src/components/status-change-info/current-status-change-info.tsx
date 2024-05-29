import { CSSProperties } from 'react';
import { Text } from 'src/components/ui';
import styled, { css } from 'styled-components';

namespace S {
  export const Wrapper = styled.div(
    ({ theme }) => css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-color: ${theme.colors.text.warning};
      border-radius: 0.5rem;
      border-style: solid;
      border-width: 1px;
      padding: 1rem;
      gap: 1rem;
    `,
  );
}

interface StatusChangeEntity {
  status?: string | null;
  status_changed_reason?: string | null;
}

interface CurrentStatusChangeInfoProps {
  entity: StatusChangeEntity;
  className?: string;
  style?: CSSProperties;
}

const CurrentStatusChangeInfo = ({
  entity,
  className,
  style,
}: CurrentStatusChangeInfoProps) => {
  const getCurrentChangeReasonLabelText = (): string | undefined => {
    if (entity.status === 'active' || !entity.status_changed_reason) {
      return undefined;
    }

    return `Reason: ${entity.status_changed_reason}`;
  };

  const current_change_reason_text = getCurrentChangeReasonLabelText();

  if (!current_change_reason_text) {
    return null;
  }

  return (
    <S.Wrapper className={className} style={style}>
      <Text>{current_change_reason_text}</Text>
    </S.Wrapper>
  );
};

export type { CurrentStatusChangeInfoProps };
export { CurrentStatusChangeInfo };
