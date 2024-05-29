import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from 'src/app.state/auth/provider';

const LogoutRoute = () => {
  const { actions } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    await actions.logout();
  };

  useEffect(() => {
    logout().then(() => {
      setTimeout(() => {
        navigate('/login', {
          replace: true,
        });
      }, 500);
    });
  }, []);

  return null;
};

export default LogoutRoute;
