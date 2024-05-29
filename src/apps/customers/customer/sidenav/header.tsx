import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useCustomer } from 'apps/customers/customer/provider';
import { getFragment } from 'codegen';
import {
  CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
  CUSTOMER_STATUS,
} from 'codegen/graphql';
import { Flex, Icon, Text } from 'components';

import {
  HeaderContact,
  IconContainer,
  HeaderContainer,
  Details,
} from './styles';
import { CustomerStatusTag } from 'src/components/customers';

const mergeTitle = (title: string | null, name: string | null | undefined) => {
  if (name && title) return `${title} ${name}`;

  return name || '';
};

const SideNavHeader = () => {
  const { state: nav_state } = useLocation();

  const { customer } = useCustomer();
  const contact = getFragment(
    CUSTOMER_ACCOUNT_CONTACT_FRAGMENT_DOC,
    customer?.contact,
  );

  const [{ email, first_name, last_name, phone_number, status }, setDetails] =
    useState<
      Record<string, string | undefined | null> & { status: CUSTOMER_STATUS }
    >({
      first_name: mergeTitle(nav_state?.title || '', nav_state?.first_name),
      last_name: nav_state?.last_name,
      email: nav_state?.customer_email,
      phone_number: null,
      status: nav_state?.account_status,
    });

  useEffect(() => {
    if (contact) {
      setDetails({
        email: contact?.email,
        first_name: mergeTitle(contact?.title || '', contact?.first_name),
        last_name: contact?.last_name,
        phone_number: contact?.landline_phone || contact?.mobile_phone,
        status: customer?.system_status?.status || 'inactive',
      });
    }
  }, [contact]);

  return (
    <>
      <HeaderContainer>
        <IconContainer>
          <Icon.AccountPerson
            style={{ fontSize: '10rem', height: '10rem', width: '10rem' }}
          />
        </IconContainer>
        <Details>
          <Flex direction="column" gap="xxSmall">
            <Text
              isTruncated
              size="displayRegular"
              style={{ textAlign: 'center' }}
            >
              {first_name}
            </Text>
            {last_name && (
              <Text
                isTruncated
                size="displayRegular"
                style={{ textAlign: 'center' }}
              >
                {last_name}
              </Text>
            )}
          </Flex>
          <Flex alignItems="center">
            {status && <CustomerStatusTag status={status} />}
          </Flex>
          <Flex alignItems="center" direction="column" gap="regular">
            {phone_number && (
              <HeaderContact>
                <Icon.MobilePhone colorKey="secondary" />
                <Text colorKey="secondary" size="displaySmall">
                  {phone_number}
                </Text>
              </HeaderContact>
            )}
            {email && (
              <HeaderContact>
                <Icon.Mail colorKey="secondary" />
                <Text colorKey="secondary" size="labelLarge">
                  {email}
                </Text>
              </HeaderContact>
            )}
          </Flex>
        </Details>
      </HeaderContainer>
    </>
  );
};

export default memo(SideNavHeader);
