import { CSSProperties } from 'react';
import { PROPERTY_STATUS } from 'src/apollo/codegen/graphql';
import { StatusTag, StatusTagColorVariants } from 'src/components/ui';
import styled from 'styled-components';

namespace S {
  export const Status = styled(StatusTag)`
    padding: 0 2rem;
    margin-top: 0.25rem;
    width: fit-content;
  `;
}

interface PropertyStatusTagProps {
  status: PROPERTY_STATUS | null | undefined;
  className?: string;
  style?: CSSProperties;
}

const PropertyStatusTag = ({
  status,
  style,
  className,
}: PropertyStatusTagProps) => {
  const status_text = status?.toUpperCase() ?? 'UNKNOWN';

  const getStatusVariant = (): StatusTagColorVariants => {
    if (!status || status === 'suspended') {
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

export type { PropertyStatusTagProps };
export { PropertyStatusTag };
