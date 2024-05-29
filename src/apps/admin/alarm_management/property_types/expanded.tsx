import { Expanded } from 'apps/dashboard/components/table';
import { AREA } from 'codegen/graphql';
import { Text } from 'components';

const ExpandedContent = ({ item }: { item: AREA }) => {
  return (
    <Expanded>
      <Expanded.Inner>
        <Text>{item.name}</Text>
      </Expanded.Inner>
    </Expanded>
  );
};

export default ExpandedContent;
