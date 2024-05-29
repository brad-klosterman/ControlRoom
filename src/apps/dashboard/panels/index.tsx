// import { DashboardRightPanelKey } from 'apps/dashboard/panels/types';
// import { Pullout, Text } from 'components';
// import { viewSessionUser } from 'src/app.state/user/session-user';
//
// import { Container, Content, Row, StatusIndicator } from './styles';
// import { useFetchAgents } from './use.agents';
//
// function Right<const K extends DashboardRightPanelKey>({
//   active_panel,
//   setRightPanel,
// }: {
//   active_panel: K | undefined;
//   setRightPanel(active_panel: any | undefined): void;
// }) {
//   //const config = active_panel && DASHBOARD.panels[active_panel];
//
//   const { session_user } = viewSessionUser();
//
//   const {
//     state: { agents },
//   } = useFetchAgents();
//
//   return (
//     <Pullout
//       handleClose={() => setRightPanel(undefined)}
//       overlay={false}
//       visible={Boolean(active_panel)}
//     >
//       <Pullout.Header subtitle={''} title={session_user?.username} />
//       <Pullout.Body>
//         <Container>
//           <Text size="displayRegular">Available Agents</Text>
//           <Content>
//             {agents.data?.map(({ id, status, username }) => (
//               <Row key={id}>
//                 <StatusIndicator status={status} />
//                 <Text style={{ lineHeight: 1 }}>{username}</Text>
//               </Row>
//             ))}
//           </Content>
//         </Container>
//       </Pullout.Body>
//     </Pullout>
//   );
// }
//
// export default {
//   Right: Right,
// };
