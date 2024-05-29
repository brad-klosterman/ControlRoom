import { useRef, FC, memo, useState, useEffect } from 'react';

import { DataPagination } from 'components/ui/Listing/Data/pagination';

import * as S from './styles';
import { StatusLight } from './styles';
import Text from '../../Text';
import { Property } from 'csstype';

const instanceOfTableDataItemComponent = (
  item: TableDataItem,
): item is TableDataItemComponent => {
  return 'component' in item;
};

interface TableDataItemLabel {
  label: string;
  subLabel?: string;
  status?: StatusLight;
  textAlign?: Property.TextAlign;
}

interface TableDataItemComponent {
  component: JSX.Element;
}

export type TableDataItem = TableDataItemLabel | TableDataItemComponent;

const Data: FC<{ data: TableDataItem | TableDataItem[] }> = props => {
  const ref = useRef<HTMLDivElement>(null);

  const use_pagination = Array.isArray(props.data) && props.data.length;

  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState<TableDataItem>(
    use_pagination ? props.data[index] : props.data,
  );

  useEffect(() => {
    if (use_pagination) {
      setCurrent(props.data[index]);
    }

    if (!Array.isArray(props.data)) {
      setCurrent(props.data);
    }
  }, [index, props.data]);

  const onChangeIndex = (new_index: number) => {
    setIndex(new_index);
  };

  if (instanceOfTableDataItemComponent(current)) {
    return (
      <S.Wrapper ref={ref}>
        <S.Content>{current.component}</S.Content>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper ref={ref}>
      {typeof current.status !== 'undefined' && (
        <S.Status status={current.status} />
      )}
      {Array.isArray(props.data) && (
        <DataPagination
          current={index}
          onChangeIndex={onChangeIndex}
          total={props.data.length}
        />
      )}
      <S.Content>
        <Text
          style={{ textAlign: current.textAlign }}
          as="span"
          size="labelLarge"
        >
          {current.label}
        </Text>

        {current.subLabel && (
          <Text
            style={{ textAlign: current.textAlign }}
            as="span"
            colorKey="secondary"
            size="labelLarge"
          >
            {current.subLabel}
          </Text>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default memo(Data);
