import React, { useMemo } from 'react';

import {
  DetailsColumn,
  DetailsContainer,
  DetailsTitleContainer,
  ReportTitleContainer,
} from 'apps/admin/reports_audits/company_reports/style';
import { RestTransmitterStatus } from 'apps/admin/reports_audits/company_reports/types';
import { SSP_REPORT_EXPORT } from 'codegen/graphql';
import { Button, Text, Flex } from 'components';
import { Expanded } from 'components/table';
import { IOptionNumber } from 'components/ui/Form/Options';
import { downloadReport } from 'utils/download_documents/downloadLink';

const ExpandedContent = ({
  area_options,
  item,
}: {
  item: SSP_REPORT_EXPORT;
  area_options: IOptionNumber[];
}) => {
  const onDownloadReport = () => {
    downloadReport(item.download_link);
  };

  const area_ids = item.filters?.area_id_in;

  const areas = useMemo<string[]>(() => {
    if (!area_ids) return [];

    return area_ids.reduce((acc, area_id) => {
      const area_name = area_options.find(area => area.value === area_id);
      if (!area_name) return acc;

      return [...acc, area_name.label];
    }, [] as string[]);
  }, [item.id]);

  const property_status =
    item.filters?.active !== undefined && item.filters?.active !== null
      ? item.filters?.active === 'true'
        ? 'ACTIVE'
        : 'INACTIVE'
      : 'ALL';

  const transmitter_status_map: {
    [key in RestTransmitterStatus]: string;
  } = {
    2: 'IN REPAIRS',
    0: 'IN STOCK',
    1: 'IN USE',
    3: 'LOST',
    4: 'UNKNOWN CUSTOMER',
  };

  return (
    <Expanded>
      <Expanded.Inner direction="column" style={{ gap: '2rem' }}>
        <ReportTitleContainer>
          <Text colorKey="secondary" isBold size="displayRegular">
            {item.name.toUpperCase()}
          </Text>
          <Flex gap="regular" justifyContent="flex-end">
            <Button
              disabled={!item.download_link}
              onClick={onDownloadReport}
              size="small"
              variant="info-secondary"
            >
              DOWNLOAD REPORT
            </Button>
          </Flex>
        </ReportTitleContainer>
        <DetailsTitleContainer>
          <Flex direction="column" style={{ width: '50%' }}>
            <Text size="displaySmall">AREAS</Text>
          </Flex>
          <Flex direction="column" style={{ width: '50%' }}>
            <Text size="displaySmall">FILTERS</Text>
          </Flex>
        </DetailsTitleContainer>
        <DetailsContainer>
          <DetailsColumn>
            {areas.length > 0 ? areas.map(area => <Text>{area}</Text>) : 'ALL'}
          </DetailsColumn>
          <DetailsColumn>
            {[
              'FALSE ALARMS REPORT',
              'FAILED TO TEST ALARMS REPORT',
              'OVERACTIVE ALARMS REPORT',
              'RESPONDERS DELEGATIONS REPORT',
              'OB STATS REPORT',
            ].includes(item.name) && (
              <Text>
                DATE RANGE: {item.date_from} - {item.date_to}
              </Text>
            )}
            {[
              'FALSE ALARMS REPORT',
              'FAILED TO TEST ALARMS REPORT',
              'OVERACTIVE ALARMS REPORT',
              'OB STATS REPORT',
            ].includes(item.name) && (
              <Text>ALARM TYPE: {item.filters?.alarm_type_eq || 'ALL'}</Text>
            )}
            {[
              'CUSTOMERS PROPERTIES REPORT',
              'CUSTOMERS KEYHOLDERS REPORT',
            ].includes(item.name) && (
              <Text>PROPERTY STATUS: {property_status}</Text>
            )}
            {['TRANSMITTERS STOCK REPORT'].includes(item.name) && (
              <>
                <Text>
                  TRANSMITTER STATUS:{' '}
                  {item?.filters?.state
                    ? transmitter_status_map[item?.filters?.state]
                    : 'ALL'}
                </Text>
                <Text>DECODER: {item.filters?.decoder_eq || 'ALL'}</Text>
              </>
            )}
          </DetailsColumn>
        </DetailsContainer>
      </Expanded.Inner>
    </Expanded>
  );
};

export default ExpandedContent;
