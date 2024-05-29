// import { AnimatePresence, motion } from 'framer-motion';
// import React, { Dispatch, SetStateAction, useState } from 'react';
//
// import { Flex } from 'components';
//
// function Panel({
//   children,
//   isActive,
//   onShow,
//   title
// }: {
//   children: React.ReactNode;
//   isActive: boolean;
//   onShow(): void;
//   title: string;
// }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
//     </section>
//   );
// }
//
// function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <Panel
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//         title="About"
//       >
//         <motion.div
//           style={{ padding: '20px', transformOrigin: 'top center' }}
//           transition={{ duration: 0.8 }}
//           variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
//         >
//           <Flex>HELLO</Flex>
//         </motion.div>
//       </Panel>
//       <Panel
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//         title="Etymology"
//       >
//         <motion.div
//           style={{ padding: '20px', transformOrigin: 'top center' }}
//           transition={{ duration: 0.8 }}
//           variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
//         >
//           <Flex>WORLD</Flex>
//         </motion.div>
//       </Panel>
//     </>
//   );
// }
//
// const param = [{ name: 'hello' }];
//
// export const ContentPlaceholder = () => (
//   <motion.div
//     style={{ padding: '20px', transformOrigin: 'top center' }}
//     transition={{ duration: 0.8 }}
//     variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
//   >
//     <Flex key="0">HI</Flex>
//     {/*{paragraphs.map(words => (*/}
//     {/*  <Flex key="0">HI</Flex>*/}
//     {/*))}*/}
//   </motion.div>
// );
//
// const ExpandPanel = (props: {
//   id: number;
//   expanded_key: false | number;
//   setExpanded: Dispatch<SetStateAction<number | false>>;
// }) => {
//   const open = props.id === props.expanded_key;
//
//   // By using `AnimatePresence` to mount and unmount the contents, we can animate
//   // them in and out while also only rendering the contents of open accordions
//   return (
//     <>
//       <motion.header
//         animate={{ backgroundColor: open ? '#FF0088' : '#0055FF' }}
//         initial={false}
//         onClick={() => props.setExpanded(open ? false : i)}
//       />
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.section
//             animate="open"
//             exit="collapsed"
//             initial="collapsed"
//             key="content"
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//             variants={{
//               open: { opacity: 1, height: 'auto' },
//               collapsed: { opacity: 0, height: 0 }
//             }}
//           >
//             <ContentPlaceholder />
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
//
// export const AccordionExample = () => {
//   const [expanded_key, setExpandedKey] = useState<false | number>(0);
//
//   return [0, 1, 2, 3].map(i => (
//     <Accordion {...{ expanded_key, setExpandedKey }} />
//   ));
// };
