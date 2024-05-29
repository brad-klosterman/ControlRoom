import { KeyholderCallStatus } from 'apps/alarms/components/keyholders/types';
import { Flex, Icon } from 'components/ui';
import { KeyholderVoipStatus } from 'src/app.state/voip/types/voip.state.types';
import styled, { css } from 'styled-components';

const CallStatus = styled.div<{
  status?: KeyholderVoipStatus;
}>(
  ({ status = 'READY', theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6rem;
    color: ${{
      CONNECTED: theme.colors.warning[500],
      DISABLED: theme.colors.primary[600],
      DISCONNECTED: theme.colors.primary[600],
      ON_HOLD: theme.colors.warning[500],
      READY: theme.colors.primary[600],
      RINGING: theme.colors.warning[500],
    }[status]};
    background-color: ${theme.colors.base[800]};
    border: 4px solid ${theme.colors.base[400]};
    font-size: 1.75rem;
    cursor: pointer;
  `,
);

export const Row = styled(Flex)<{
  first: boolean;
  last: boolean;
  expanded?: boolean;
}>(
  ({ expanded, first, last, theme }) => css`
    height: 5rem;
    width: 100%;
    align-items: stretch;
    background: ${theme.colors.base[400]};
    cursor: pointer;
    ${first &&
    css`
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      ${CallStatus} {
        border-top-left-radius: 0.5rem;
      }
    `}
    ${last &&
    css`
      border-bottom-left-radius: ${expanded ? 0 : '0.5rem'};
      border-bottom-right-radius: ${expanded ? 0 : '0.5rem'};
      ${CallStatus} {
        border-bottom-left-radius: ${expanded ? 0 : '0.5rem'};
      }
    `}
    ${expanded &&
    css`
      ${CallStatus} {
        border-color: ${theme.colors.primary[700]};
      }
    `}
    &:hover {
      ${CallStatus} {
        border-color: ${theme.colors.primary[700]};
      }
    }
    .seon-ui-expander-arrow {
      color: ${theme.colors.base[100]};
    }
  `,
);

export const RowInner = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: stretch;
    width: 100%;
    padding-right: ${theme.space.regular};
  `,
);

export const PhoneIcon = (props: { status?: KeyholderVoipStatus }) => {
  return (
    <Flex alignItems="stretch" style={{ width: '6rem', height: '100%' }}>
      <CallStatus status={props.status}>
        <Icon.Phone />
      </CallStatus>
    </Flex>
  );
};

export const Details = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: ${theme.space.regular} ${theme.space.regular};
    gap: ${theme.space.xSmall};
  `,
);

export const ExpandedContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    //margin-top: -4px;
    background: ${theme.colors.table.content};
    border-right: 4px solid ${theme.colors.base[400]};
    border-left: 4px solid ${theme.colors.base[400]};
    border-bottom: 4px solid ${theme.colors.base[400]};
  `,
);

export const ExpandedInner = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${theme.space.large};
    gap: ${theme.space.regular};
  `,
);

export const StatusSelectWrap = styled(Flex)<{
  variant: KeyholderCallStatus;
  selected: boolean;
}>(
  ({ selected, theme, variant }) => css`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: ${theme.space.regular};
    gap: ${theme.space.regular};
    color: ${theme.colors.secondary[400]};
    border: 2px solid ${theme.colors.base[700]};
    border-radius: 3px;
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.regular};
    cursor: pointer;
    ${selected &&
    css`
      color: ${{
        NOT_ANSWERED: theme.colors.text.error,
        ANSWERED: theme.colors.outline.focusPrimary,
      }[variant]};
      border: 2px solid
        ${{
          NOT_ANSWERED: theme.colors.error[500],
          ANSWERED: theme.colors.primary[500],
        }[variant]};
    `}
    &:hover {
      color: ${{
        NOT_ANSWERED: theme.colors.text.error,
        ANSWERED: theme.colors.outline.focusPrimary,
      }[variant]};
      border: 2px solid
        ${{
          NOT_ANSWERED: theme.colors.error[500],
          ANSWERED: theme.colors.primary[500],
        }[variant]};
    }
  `,
);

export const PasswordStatus = styled(Flex)(
  ({ theme }) => css`
    align-items: center;
    width: 100%;
    padding: ${theme.space.regular};
  `,
);
