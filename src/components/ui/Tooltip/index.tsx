import {
  ForwardRefExoticComponent,
  forwardRef,
  PropsWithChildren,
  RefAttributes,
  ReactNode,
} from 'react';

import * as S from './styles';
import Text from '../Text';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <S.Header>{children}</S.Header>;
};

interface ContentProps extends HeaderProps {
  isBold?: boolean;
}

const Content = ({ children, isBold }: ContentProps) => {
  return (
    <S.Content>
      <Text isBold={isBold} size="regular">
        {children}
      </Text>
    </S.Content>
  );
};

Content.defaultProps = {
  isBold: false,
};

export interface TooltipFC
  extends ForwardRefExoticComponent<
    PropsWithChildren<RefAttributes<HTMLDivElement>>
  > {
  Body: typeof S.Body;
  Content: typeof Content;
  Footer: typeof S.Footer;
  Header: typeof Header;
}

type TooltipProps = {
  children: ReactNode;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children }: TooltipProps, ref) => {
    return <S.Wrapper ref={ref}>{children}</S.Wrapper>;
  },
) as TooltipFC;

Tooltip.Body = S.Body;
Tooltip.Footer = S.Footer;
Tooltip.Header = Header;
Tooltip.Content = Content;

export default Tooltip;
