// /* eslint-disable sort-keys-fix/sort-keys-fix */
// import { useQuery } from '@apollo/client';
//
// import { FragmentType } from 'codegen';
// import {
//   AGENT,
//   CORE_AGENT_FRAGMENT_DOC,
//   FETCH_AGENTS_DOCUMENT,S
// } from 'codegen/graphql';
// import { sortObjectBy } from 'utils';
// import { Lazy, LazyState } from 'utils/lazy';
//
// interface UseFetchAgentsActions {
//   refetchAgents: () => Promise<void>;
// }
//
// interface UseFetchAgentsState {
//   agents: Lazy<AGENT[]>;
// }
//
// interface UseFetchAgentsReturn {
//   actions: UseFetchAgentsActions;
//   state: UseFetchAgentsState;
// }
//
// const useFetchAgents = (): UseFetchAgentsReturn => {
//   const { data, loading, refetch } = useQuery(FETCH_AGENTS_DOCUMENT);
//
//   const buildLazyAgents = (): Lazy<
//     FragmentType<typeof CORE_AGENT_FRAGMENT_DOC>[]
//   > => {
//     const fetched_agents = data?.agents.agents;
//
//     if (loading) {
//       return {
//         state: LazyState.LOADING,
//         data: fetched_agents,
//       };
//     }
//
//     if (!fetched_agents) {
//       return {
//         state: LazyState.ERROR,
//       };
//     }
//
//     return {
//       state: LazyState.SUCCESS,
//       data: sortObjectBy(
//         fetched_agents,
//         agent => (agent?.status === 'ONLINE' ? 1 : 2),
//         'ascending',
//       ),
//     };
//   };
//
//   return {
//     state: {
//       agents: buildLazyAgents(),
//       //agents: buildLazyAgents(),
//     },
//     actions: {
//       refetchAgents: async () => {
//         await refetch();
//       },
//     },
//   };
// };
//
// export { useFetchAgents };
