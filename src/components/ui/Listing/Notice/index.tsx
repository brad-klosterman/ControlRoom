import type { ReactElement } from 'react';

import * as S from './styles';
import Button from '../../Button';
import Text from '../../Text';

// const circleQuestion = '../../../../static/images/circle-question.svg';
// const circleAlert = '../../../../static/images/circle-alert.svg';

export interface NoticeProps {
  action?: {
    func(): void;
    label: string;
  };
  content: string;
  error?: boolean;
  title: string;
}

export interface NoticeFC {
  (props: NoticeProps): ReactElement<any, any>;
}

const Notice: NoticeFC = ({ action, content, title }) => (
  <S.Wrapper>
    {/* <img alt={title} src={error ? circleAlert : circleQuestion} /> */}
    <Text
      as="h3"
      isBold
      margin={{ bottom: 'xSmall', top: 'large' }}
      size="displayRegular"
    >
      {title}
    </Text>
    <Text colorKey="secondary" margin={action && { bottom: 'large' }}>
      {content}
    </Text>
    {action && (
      <Button onClick={action.func} variant="secondary">
        {action.label}
      </Button>
    )}
  </S.Wrapper>
);

export default Notice;
