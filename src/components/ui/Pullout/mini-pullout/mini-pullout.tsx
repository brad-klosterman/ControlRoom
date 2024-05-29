import { AnimatePresence } from 'framer-motion';
import { ReactElement } from 'react';

import { Wrapper, Inner } from './mini-pullout.styles';
// import IconButton from '../../IconButton';
import { Flex } from '../../Layout';

interface MiniPulloutProps {
  children: ReactElement;
  closeOnClickAway?: boolean;
  handleClose?: (bool: boolean) => void;
  expanded: boolean;
}

const MiniPullout = ({ children, expanded }: MiniPulloutProps) => {
  return (
    <AnimatePresence>
      {expanded && (
        <Wrapper>
          <Inner>
            {/*<IconButton.Cross*/}
            {/*  label="Close"*/}
            {/*  onClick={() => handleClose(false)}*/}
            {/*/>*/}
            <Flex direction="column">{children}</Flex>
          </Inner>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default MiniPullout;
