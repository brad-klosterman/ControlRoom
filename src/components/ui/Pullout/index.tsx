import { AnimatePresence } from 'framer-motion';
import { PropsWithChildren, ReactElement } from 'react';

import { Maybe } from 'codegen/graphql';

import * as S from './styles';
import IconButton from '../IconButton';
import { Flex } from '../Layout';
import Text from '../Text';

type Children<Elements> =
  | boolean
  | null
  | undefined
  | ReactElement<Elements>
  | Array<Children<Elements>>;

export interface HeaderProps {
  title: Maybe<string> | undefined;
  subtitle?: Maybe<string>;
}

export interface HeaderFC {
  (props: PropsWithChildren<HeaderProps>): ReactElement<any, any>;
}

interface PulloutProps {
  children: Children<HeaderProps | typeof S.Body | typeof S.Footer>;
  overlay?: boolean;
  handleClose?: () => void;
  visible: boolean;
}

export interface PulloutFC {
  (props: PulloutProps): ReactElement<any, any>;
  Body: typeof S.Body;
  Footer: typeof S.Footer;
  Header: HeaderFC;
}

const Header: HeaderFC = ({ children, subtitle, title }) => (
  <S.Header>
    <Text isBold size="displayRegular">
      {title || ''}
    </Text>
    {subtitle && <Text colorKey="secondary">{subtitle}</Text>}
    {children}
  </S.Header>
);

const Pullout: PulloutFC = ({
  children,
  handleClose,
  overlay = true,
  visible,
}) => {
  const close = () => handleClose && handleClose();

  return (
    <AnimatePresence>
      {visible && (
        <S.Wrapper>
          {overlay && <S.Overlay onClick={close} />}
          <S.Inner>
            <IconButton.Cross label="Close" onClick={close} />
            <Flex direction="column">{children}</Flex>
          </S.Inner>
        </S.Wrapper>
      )}
    </AnimatePresence>
  );
};

Pullout.Header = Header;
Pullout.Body = S.Body;
Pullout.Footer = S.Footer;

export default Pullout;
