import React from 'react';

import { COMPANY_REPORT_TYPE } from 'codegen/graphql';
import { Button, Flex, Text } from 'components';
import styled, { css } from 'styled-components';
import { toUpperSentence } from 'utils';

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    background: ${theme.colors.base[900]};
    border-color: ${theme.colors.base[900]};
    color: ${theme.colors.text.primary};
    &:hover {
      color: ${theme.colors.text.primary};
      box-shadow: none;
    }
  `,
);

export const TypeTitle = (props: { title: string }) => {
  return (
    <Text
      colorKey="secondary"
      size="labelLarge"
      style={{ paddingTop: '1.5rem' }}
    >
      {props.title}
    </Text>
  );
};

export const TypeButton = (props: {
  type: COMPANY_REPORT_TYPE;
  onClick(report_type: COMPANY_REPORT_TYPE): void;
}) => {
  return (
    <StyledButton onClick={() => props.onClick(props.type)} variant="secondary">
      {toUpperSentence(props.type)} REPORT
    </StyledButton>
  );
};

export const ReportTitleContainer = styled(Flex)(
  () => css`
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  `,
);

export const DetailsTitleContainer = styled(Flex)(
  ({ theme }) => css`
    border-top: 2px solid ${theme.colors.base[100]};
    border-bottom: 2px solid ${theme.colors.base[100]};
    padding: ${theme.space.xLarge};
    width: 100%;
  `,
);

export const DetailsContainer = styled(Flex)(
  ({ theme }) => css`
    padding: 0 ${theme.space.xLarge};
    width: 100%;
  `,
);

export const DetailsColumn = styled(Flex)(
  ({ theme }) => css`
    flex-direction: column;
    gap: ${theme.space.regular};
    width: 50%;
  `,
);
