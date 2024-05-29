// import { AnimatePresence, motion } from 'framer-motion';
// import './styles.scss';
// import { Children, createContext, useContext, useState } from 'react';
//
// const AccordionContext = createContext({});
// const useAccordion = () => useContext(AccordionContext);
//
// function Accordion({ children, defaultIndex, multiple }) {
//   const [activeIndex, setActiveIndex] = useState(
//     multiple ? [defaultIndex] : defaultIndex
//   );
//
//   function onChangeIndex(index) {
//     setActiveIndex(currentActiveIndex => {
//       if (!multiple) {
//         return index === activeIndex ? -1 : index;
//       }
//
//       if (currentActiveIndex.includes(index)) {
//         return currentActiveIndex.filter(i => i !== index);
//       }
//
//       return currentActiveIndex.concat(index);
//     });
//   }
//
//   return Children.map(children, (child, index) => {
//     const isActive =
//       multiple && Array.isArray(activeIndex)
//         ? activeIndex.includes(index)
//         : activeIndex === index;
//
//     return (
//       <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
//         {child}
//       </AccordionContext.Provider>
//     );
//   });
// }
//
// function AccordionItem({ children }) {
//   return <div className="AccordionItem">{children}</div>;
// }
//
// function AccordionHeader({ children }) {
//   const { index, isActive, onChangeIndex } = useAccordion();
//
//   return (
//     <motion.div
//       className={`AccordionHeader ${isActive ? 'active' : ''}`}
//       onClick={() => onChangeIndex(index)}
//     >
//       {children}
//     </motion.div>
//   );
// }
//
// function AccordionPanel({ children }) {
//   const { isActive } = useAccordion();
//
//   return (
//     <AnimatePresence initial={false}>
//       {isActive && (
//         <motion.div
//           animate={{ height: 'auto' }}
//           exit={{ height: 0 }}
//           initial={{ height: 0 }}
//           transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
//         >
//           <div className="AccordionPanel">{children}</div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
//
// // export default function App() {
// //   return (
// //     <section className="App">
// //       <h2>collapsible</h2>
// //       <Accordion>
// //         {[...Array(2)].map((_, i) => (
// //           <AccordionItem key={i}>
// //             <AccordionHeader>Accordion</AccordionHeader>
// //             <AccordionPanel>
// //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
// //               explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
// //               aspernatur quisquam illo! Officiis explicabo laborum incidunt
// //               corrupti provident esse eligendi.
// //             </AccordionPanel>
// //           </AccordionItem>
// //         ))}
// //       </Accordion>
// //
// //       <br />
// //
// //       <h2>multiple</h2>
// //       <Accordion multiple>
// //         {[...Array(2)].map((_, i) => (
// //           <AccordionItem key={i}>
// //             <AccordionHeader>Accordion</AccordionHeader>
// //             <AccordionPanel>
// //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
// //               explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
// //               aspernatur quisquam illo! Officiis explicabo laborum incidunt
// //               corrupti provident esse eligendi.
// //             </AccordionPanel>
// //           </AccordionItem>
// //         ))}
// //       </Accordion>
// //     </section>
