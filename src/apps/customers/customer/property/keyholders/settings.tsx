import { Icon, Text } from 'components';

import * as S from './styles';

export const KeyholderServices = ({
  isEnabled,
  label,
}: {
  isEnabled: boolean;
  label: string;
}) => (
  <S.IconWrap>
    {isEnabled ? <Icon.Tick isFixedSize /> : <Icon.Cross isFixedSize />}
    <Text size="displaySmall">{label}</Text>
  </S.IconWrap>
);
