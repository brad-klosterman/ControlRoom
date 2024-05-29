import { useNavigate } from 'react-router-dom';

import { useCustomer } from 'apps/customers/customer/provider';
import { Button } from 'components';
import { useCanUpdateCustomers } from 'src/app.state/permissions/hooks/update-customers.permission';

import { FooterContainer } from './styles';

const SideNavFooter = () => {
  const navigate = useNavigate();
  const is_user_authorized_to_create_properties = useCanUpdateCustomers();
  const { creating_customer, creating_property, dispatch } = useCustomer();

  const cancelCreatingCustomer = () => {
    navigate('../');
  };

  if (!is_user_authorized_to_create_properties) {
    return null;
  }

  return (
    <FooterContainer>
      {creating_customer ? (
        <Button onClick={cancelCreatingCustomer} size="small" variant="delete">
          CANCEL CREATING CUSTOMER
        </Button>
      ) : (
        <Button
          onClick={() => dispatch('TOGGLE_NEW_PROPERTY', {})}
          size="small"
          style={{ width: '12rem' }}
          variant={creating_property ? 'delete' : 'secondary'}
        >
          {creating_property ? 'CANCEL CREATING' : 'CREATE PROPERTY'}
        </Button>
      )}
    </FooterContainer>
  );
};

export default SideNavFooter;
