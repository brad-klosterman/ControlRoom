import type { ReactElement, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeonWhite } from 'images';
import { useAuthContext } from 'src/app.state/auth/provider';

import { NavLink } from './sidenav.link';
import {
  Container,
  Menu,
  Bottom,
  IconStyle,
  NavLogoContainer,
  Divider,
} from './styles';
import Icon from '../Icon';
import { Image } from '../Image';

export interface SideNavProps {
  children?: ReactNode;
}

export interface ISideNav {
  (props: SideNavProps): ReactElement;
  Link: typeof NavLink;
  Divider: typeof Divider;
}

const SideNav: ISideNav = ({ children }) => {
  const navigate = useNavigate();
  const {
    state: { ssp_settings },
  } = useAuthContext();

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.body?.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <Container>
      <NavLogoContainer>
        <Image
          alt="comapny_logo"
          shape="rounded"
          src={ssp_settings?.logo_image_url ?? SeonWhite}
          width={'100%'}
          height={'auto'}
        />
      </NavLogoContainer>
      <Menu>{children}</Menu>
      <Bottom>
        <SideNav.Link
          active={false}
          icon="Logout"
          onClick={() => navigate('/logout')}
          title="LOGOUT"
        />
        <Icon.FullScreen onClick={toggleFullScreen} style={IconStyle} />
      </Bottom>
    </Container>
  );
};

SideNav.Link = NavLink;
SideNav.Divider = Divider;

export default SideNav;
