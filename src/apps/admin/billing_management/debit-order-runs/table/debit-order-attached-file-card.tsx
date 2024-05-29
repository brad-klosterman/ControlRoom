import { DEBIT_ORDER_ATTACHED_FILE_FRAGMENT } from 'src/apollo/codegen/graphql';
import { Button, Text } from 'src/components';
import { toUpperSentence } from 'src/utils';
import { downloadLink } from 'src/utils/download_documents/downloadLink';
import { getRelativeDateString } from 'src/utils/formatDateTime';
import styled, { css } from 'styled-components';

namespace S {
  export const Card = styled.div(
    ({ theme }) => css`
      padding: 1rem;
      border-style: solid;
      border-radius: 0.25rem;
      border-color: ${theme.colors.base[100]};
      display: flex;
      justify-content: space-evenly;
    `,
  );

  export const CardSection = styled.div`
    width: 100%;
  `;

  export const InfoLabel = styled(Text).attrs(() => {
    return {
      colorKey: 'secondary',
      size: 'labelRegular',
    };
  })``;
}

interface Props {
  attached_file: DEBIT_ORDER_ATTACHED_FILE_FRAGMENT;
}

const DebitOrderAttachedFileCard = ({ attached_file }: Props) => {
  const getFileTypeName = (): string => {
    if (!attached_file.type) {
      return '-';
    }

    return toUpperSentence(attached_file.type);
  };

  const onDownloadPdf = () => {
    downloadLink(attached_file.url);
  };

  return (
    <S.Card>
      <S.CardSection>
        <S.InfoLabel>TYPE</S.InfoLabel>
        <Text>{getFileTypeName()}</Text>
      </S.CardSection>
      <S.CardSection>
        <S.InfoLabel>CREATED AT</S.InfoLabel>
        <Text>{getRelativeDateString(attached_file.created_at) ?? '-'}</Text>
      </S.CardSection>
      <S.CardSection>
        <Button onClick={onDownloadPdf} variant="other-secondary">
          DOWNLOAD DOCUMENT
        </Button>
      </S.CardSection>
    </S.Card>
  );
};

export { DebitOrderAttachedFileCard };
