import { Module } from 'apps/alarms/components/alarm.expander/content/styles';
import { Text, Flex } from 'components';

const AssignAgent = () => {
  return (
    <Module>
      <Flex style={{ padding: '2rem' }}>
        <Text>Assign the alarm to me by Acknowledging the instructions.</Text>
      </Flex>
    </Module>
  );
};

export default AssignAgent;
