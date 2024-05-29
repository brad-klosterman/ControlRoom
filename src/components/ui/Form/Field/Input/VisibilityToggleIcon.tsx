import { Flex } from '../../../Layout';
import Icon from '../../../Icon';

function VisibilityToggleIcon(props: { visible: boolean; onClick(): void }) {
  return (
    <Flex
      onClick={props.onClick}
      style={{ height: '100%', padding: '0 0.75rem', cursor: 'pointer' }}
      justifyContent="center"
      alignItems="center"
    >
      {props.visible ? <Icon.EyeOpen /> : <Icon.EyeClosed />}
    </Flex>
  );
}

export { VisibilityToggleIcon };
