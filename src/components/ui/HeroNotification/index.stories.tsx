import type { Story } from '@storybook/react';

import { Button } from 'components';

import HeroNotification, { HeroNotificationFC } from '.';

export const Default: Story<HeroNotificationFC> = () => (
  <HeroNotification
    image="https://dev-sonovate-np-euw-core-global-compute-inbound-aks.sonovateservices.dev/web/verification/static/images/404.svg"
    title="Lorem ipsum dolor sit amet"
  >
    <HeroNotification.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet
      nunc at congue lobortis. Nam et sodales.
    </HeroNotification.Body>
    <HeroNotification.Actions>
      <Button variant="cancel">Cancel</Button>
      <Button>Continue</Button>
    </HeroNotification.Actions>
  </HeroNotification>
);

export default {
  component: HeroNotification,
  title: 'Components/HeroNotification',
};
