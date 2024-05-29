import { CSSProperties } from 'react';
import { SCHEDULED_STATUS_CHANGES_FRAGMENT } from 'src/apollo/codegen/graphql';
import { useSSPSettingsContext } from 'src/apps/admin/company_settings/settings/provider';
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

interface ScheduledStatusChangeInfoProps {
  scheduled_status_changes:
    | SCHEDULED_STATUS_CHANGES_FRAGMENT
    | null
    | undefined;
  current_status: string | null | undefined;
  className?: string;
  style?: CSSProperties;
}

const ScheduledStatusChangeInfo = ({
  scheduled_status_changes,
  current_status,
  className,
  style,
}: ScheduledStatusChangeInfoProps) => {
  const { account_suspension_reasons } = useSSPSettingsContext();

  const getSuspensionReason = (): string | undefined => {
    if (!scheduled_status_changes) {
      return undefined;
    }

    if (scheduled_status_changes?.status_changed_reason_id) {
      return account_suspension_reasons.filter(
        x => x.id === scheduled_status_changes?.status_changed_reason_id,
      )[0]?.reason;
    }

    return scheduled_status_changes.status_changed_reason ?? undefined;
  };

  const getSuspensionReasonLabelText = (): string | undefined => {
    const suspension_reason = getSuspensionReason();

    if (!suspension_reason) {
      return undefined;
    }

    return `Reason: ${suspension_reason}`;
  };

  const getScheduledChangeLabelText = (): string | undefined => {
    // If the scheduled status change is the same as the current status,
    // do not show
    if (
      !scheduled_status_changes ||
      !scheduled_status_changes.status ||
      current_status === scheduled_status_changes.status
    ) {
      return undefined;
    }

    return `TO BE ${scheduled_status_changes.status} ON ${scheduled_status_changes.change_status_at}`;
  };

  const getReactivationDateLabelText = (): string | undefined => {
    if (
      !scheduled_status_changes ||
      !scheduled_status_changes.reactivation_date
    ) {
      return undefined;
    }

    return `TO BE REACTIVATED ON ${scheduled_status_changes.reactivation_date}`;
  };

  const scheduled_change_text = getScheduledChangeLabelText();
  const reactivation_date_text = getReactivationDateLabelText();
  const suspension_reason_text = getSuspensionReasonLabelText();

  const hide_render =
    !scheduled_change_text &&
    !reactivation_date_text &&
    !suspension_reason_text;

  if (hide_render) {
    return null;
  }

  return (
    <S.Wrapper className={className} style={style}>
      {scheduled_change_text && (
        <Text isBold size="displayRegular">
          {scheduled_change_text.toUpperCase()}
        </Text>
      )}
      {reactivation_date_text && (
        <Text isBold size="displayRegular">
          {reactivation_date_text.toUpperCase()}
        </Text>
      )}
      {suspension_reason_text && <Text>{suspension_reason_text}</Text>}
    </S.Wrapper>
  );
};

export type { ScheduledStatusChangeInfoProps };
export { ScheduledStatusChangeInfo };
