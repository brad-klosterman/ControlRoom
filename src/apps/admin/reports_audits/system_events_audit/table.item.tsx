import {
  SYSTEM_CHANGE_EVENT_FRAGMENT,
  SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT_DOC,
} from 'codegen/graphql';
import { getFragment } from 'codegen';
import { toUpperSentence } from 'utils';
import { Fragment, useContext } from 'react';
import { getJsonObjectSafe } from 'src/utils/getJsonObjectSafe';
import { Expanded } from 'components/table';
import { Flex, Text } from 'components/ui';
import Modal from 'components/ui/Modal/provider';

import {
  TitleContainer,
  ContentGridHeader,
  ContentGrid,
  ContentGridCell,
  ViewJSONLink,
  JSONModalContent,
} from './styles';

const ChangeValueText = (props: {
  row_key: string;
  value: string | undefined | null;
}) => {
  const modal = useContext(Modal.Context);
  const json_object = getJsonObjectSafe(props.value);

  if (!json_object) {
    return (
      <Flex style={{ position: 'relative', width: '100%' }}>
        <Text size="displaySmall">{props.value}</Text>
      </Flex>
    );
  }

  return (
    <ViewJSONLink
      onClick={() =>
        modal.open({
          title: props.row_key,
          actions: [{ type: 'cancel', text: 'CLOSE' }],
          component: () => (
            <JSONModalContent>
              <pre>{JSON.stringify(json_object, null, 2)}</pre>
            </JSONModalContent>
          ),
        })
      }
    >
      VIEW JSON
    </ViewJSONLink>
  );
};

const ExpandedContent = (props: { item: SYSTEM_CHANGE_EVENT_FRAGMENT }) => {
  const event = props.item;

  const event_changes =
    getFragment(SYSTEM_CHANGE_EVENT_VALUE_FRAGMENT_DOC, event.changes) || [];

  return (
    <Expanded>
      <Expanded.Inner direction="column" style={{ gap: '2rem' }}>
        <TitleContainer>
          <Text colorKey="secondary" isBold size="displayRegular">
            {event.changed_type.toUpperCase()} :{' '}
            {event.event_type.toUpperCase()}
          </Text>
          <Text colorKey="secondary" size="labelRegular">
            {event.changed_by_id.toUpperCase()}
          </Text>
        </TitleContainer>

        <ContentGridHeader>
          <ContentGridCell>
            <Text size="displaySmall">KEY</Text>
          </ContentGridCell>
          <ContentGridCell>
            <Text size="displaySmall">OLD VALUE</Text>
          </ContentGridCell>
          <ContentGridCell>
            <Text size="displaySmall">NEW VALUE</Text>
          </ContentGridCell>
        </ContentGridHeader>

        <ContentGrid>
          {event_changes.map((event_change, index) => (
            <Fragment key={index}>
              <ContentGridCell>
                <Text size="displaySmall">
                  {toUpperSentence(event_change.key || '')}
                </Text>
              </ContentGridCell>
              <ContentGridCell>
                <ChangeValueText
                  row_key={toUpperSentence(event_change.key || '')}
                  value={event_change.old_value}
                />
              </ContentGridCell>
              <ContentGridCell>
                <ChangeValueText
                  row_key={toUpperSentence(event_change.key || '')}
                  value={event_change.new_value}
                />
              </ContentGridCell>
            </Fragment>
          ))}
        </ContentGrid>
      </Expanded.Inner>
    </Expanded>
  );
};

export default ExpandedContent;
