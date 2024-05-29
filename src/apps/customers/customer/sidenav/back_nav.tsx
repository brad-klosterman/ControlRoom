import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Icon, Text } from 'components';
import { CustomerNavLocationState } from 'apps/customers/customer/types';

const BackNav = () => {
  const Location = useLocation();

  const [location_state, setLocationState] = useState<CustomerNavLocationState>(
    {
      back_url: '/control_room/customers',
    },
  );

  useEffect(() => {
    const back_url = Location.state?.back_url;

    if (back_url) {
      setLocationState(Location.state);
    }
  }, []);

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
        left: '38rem',
      }}
    >
      <Link state={location_state} to={location_state.back_url}>
        <Flex alignItems="center" gap="xSmall" justifyContent="flex-start">
          <Icon.ArrowLeft
            colorKey="emphasise"
            style={{ fontSize: '1.25rem' }}
          />
          <Text colorKey="emphasise" size="displaySmall">
            BACK
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default BackNav;
