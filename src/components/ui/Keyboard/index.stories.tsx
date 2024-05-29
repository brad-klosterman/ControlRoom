import Text from '../Text';

import Keyboard from '.';

/* eslint-disable no-alert */
export const KeyPress = () => (
  <Keyboard onEsc={() => alert('You pressed ESC')} target="document">
    <Text as="h3" size="displayRegular">
      Press Esc
    </Text>
  </Keyboard>
);

export default {
  title: 'Components/Keyboard',
};
