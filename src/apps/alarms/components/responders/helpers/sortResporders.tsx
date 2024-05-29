// import { LiveResponderPositioning } from 'apps/admin/user_management/responders/types';
// import { COORDINATES, CORE_RESPONDER_FRAGMENT, Maybe } from 'codegen/graphql';
// import { findDistance, sortObjectBy } from 'src/utils';
//
// const sortRespondersDistance = ({
//   responders
// }: {
//   responders: readonly CORE_RESPONDER_FRAGMENT[];
// }): LiveResponderPositioning[] => {
//   if (!responders) return [];
//
//   const { PRIMARY, SECONDARY } = responders.reduce(
//     (acc, responder) => {
//       const availability_status =
//         responder.status === 'AVAILABLE' ? 'PRIMARY' : 'SECONDARY';
//
//       let distance_to_alarm: number | null = null;
//
//       if (responder.position && alarm_coordinates) {
//         distance_to_alarm = findDistance({
//           destination: [
//             parseFloat(alarm_coordinates.latitude),
//             parseFloat(alarm_coordinates.longitude)
//           ],
//           origin: [
//             parseFloat(responder.position.latitude),
//             parseFloat(responder.position.longitude)
//           ]
//         });
//       }
//
//       return {
//         ...acc,
//         [availability_status]: [
//           ...acc[availability_status],
//           {
//             ...responder,
//             distance_to_alarm
//           }
//         ]
//       };
//     },
//     {
//       PRIMARY: [] as LiveResponderPositioning[],
//       SECONDARY: [] as LiveResponderPositioning[]
//     }
//   );
//
//   const sorted_available_responders = sortObjectBy(
//     PRIMARY,
//     responder => responder.distance_to_alarm || 1000,
//     'ascending'
//   );
//
//   return [...sorted_available_responders, ...SECONDARY];
// };
//
// export default sortRespondersDistance;
