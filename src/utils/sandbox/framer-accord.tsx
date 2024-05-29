import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { Dispatch, SetStateAction, useState } from 'react';

import { Flex } from 'components';

const params = [{ name: 'hello' }];

export const ContentPlaceholder = () => (
  <motion.div
    style={{ padding: '20px', transformOrigin: 'top center' }}
    transition={{ duration: 0.8 }}
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
  >
    {params.map(words => (
      <Flex key="0">HI</Flex>
    ))}
  </motion.div>
);

const Accordion = ({
  expanded,
  i,
  setExpanded
}: {
  expanded: false | number;
  i: number;
  setExpanded: Dispatch<SetStateAction<number | false>>;
}) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            animate="open"
            exit="collapsed"
            initial="collapsed"
            key="content"
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
          >
            <ContentPlaceholder />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const accordionIds = [0, 1, 2, 3];

export const AccordionExample = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return accordionIds.map(i => (
    <Accordion expanded={expanded} i={i} setExpanded={setExpanded} />
  ));
};
