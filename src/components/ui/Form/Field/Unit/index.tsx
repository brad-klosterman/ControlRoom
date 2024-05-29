import * as S from './styles';
import Text from '../../../Text';

interface UnitProps {
  children: string;
}

const Unit = ({ children }: UnitProps) => (
  <S.Wrapper>
    <Text as="span">{children}</Text>
  </S.Wrapper>
);

export default Unit;
