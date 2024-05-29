import { buildApolloClient } from './config';

const ControlRoomApolloClient = buildApolloClient({
  gateway_link: process.env.SEON_GATEWAY!,
  subscriptions_link: process.env.WSS_LINK!,
});

export { ControlRoomApolloClient };
