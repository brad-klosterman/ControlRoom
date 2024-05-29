import { CSSProperties } from 'react';
import { CUSTOMER_STATUS } from 'src/apollo/codegen/graphql';
import { StatusTag, StatusTagColorVariants } from 'src/components/ui';
import styled from 'styled-components';

namespace S {
  export const Status = styled(StatusTag)`
    padding: 0 2rem;
    margin-top: 0.25rem;
    width: fit-content;
  `;
}

interface CustomerStatusTagProps {
  status: CUSTOMER_STATUS | null | undefined;
  className?: string;
  style?: CSSProperties;
}

const CustomerStatusTag = ({
  status,
  style,
  className,
}: CustomerStatusTagProps) => {
  const status_text = status?.toUpperCase() ?? 'UNKNOWN';

  const getStatusVariant = (): StatusTagColorVariants => {
    if (!status) {
      return 'warning';
    }

    return status === 'active' ? 'success' : 'error';
  };

  return (
    <S.Status
      variant={getStatusVariant()}
      text={status_text}
      style={style}
      className={className}
    />
  );
};

export type { CustomerStatusTagProps };
export { CustomerStatusTag };
