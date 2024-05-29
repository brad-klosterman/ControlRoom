// https://github.com/facebook/react/issues/23396
import { useQuery } from '@apollo/client';
import { memo, useEffect, useRef } from 'react';

import { getFragment } from 'codegen';
import {
  ALARM_SOURCE,
  CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC,
  CORE_ALARM_LOG_FRAGMENT_DOC,
  FETCH_ALARM_LOGS_DOCUMENT,
} from 'codegen/graphql';
import { Text } from 'components';
import { formatDateTime } from 'utils';

import { Container, Row, Scrollable, Inner, Anchor } from './styles';

const AlarmLogs = ({
  alarm_id,
  alarm_source,
  enabled,
  expanded,
  should_poll,
  show_date = false,
}: {
  alarm_id: number;
  alarm_source: ALARM_SOURCE | undefined;
  should_poll: boolean;
  enabled: boolean;
  expanded: boolean;
  show_date?: boolean;
}) => {
  const { data, loading } = useQuery(FETCH_ALARM_LOGS_DOCUMENT, {
    pollInterval: should_poll ? 1000 : undefined,
    skip: !expanded,
    variables: { alarm_id, alarm_source: alarm_source || 'TRANSMITTER' },
  });

  const logs = getFragment(CORE_ALARM_LOG_FRAGMENT_DOC, data?.alarm_logs) || [];

  // const incident_report = getFragment(
  //   CORE_ALARM_INCIDENT_REPORT_FRAGMENT_DOC,
  //   alarm?.incident_report,
  // );

  const anchor_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // scroll to bottom every time logs change
    const timer = setTimeout(() => {
      if (expanded && logs.length > 2) {
        anchor_ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [expanded, logs.length]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Container>
        <Scrollable>
          <Inner>
            {loading ? (
              <Row>
                <Text colorKey="secondary" size="labelLarge">
                  ...LOADING
                </Text>
              </Row>
            ) : (
              logs.map(log => (
                <Row key={log.id}>
                  <Text colorKey="secondary" size="labelLarge">
                    {formatDateTime({
                      date: log.created_at,
                      format: show_date ? 'dateTime' : 'time',
                      locale: 'en-ZA',
                    })}
                    <b> {log.message}</b>
                  </Text>
                </Row>
              ))
            )}
            <Anchor ref={anchor_ref} />
          </Inner>
        </Scrollable>
      </Container>
    </>
  );
};

export default memo(AlarmLogs);
