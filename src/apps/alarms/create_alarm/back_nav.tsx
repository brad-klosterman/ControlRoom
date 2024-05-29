import { Link } from 'react-router-dom';

import { Flex, Icon, Text } from 'components';

const BackNav = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      style={{
        cursor: 'pointer',
        height: '5rem',
        width: '5rem',
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: '14rem',
      }}
    >
      <Link to={'/control_room/alarms/emergency'}>
        <Flex
          alignItems="center"
          gap="xSmall"
          justifyContent="flex-start"
          style={{ width: '20rem' }}
        >
          <Icon.ArrowLeft
            colorKey="emphasise"
            style={{ fontSize: '1.25rem' }}
          />
          <Text colorKey="emphasise" size="displaySmall">
            BACK TO ALARMS
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default BackNav;
