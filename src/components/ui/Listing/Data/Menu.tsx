import * as S from './styles';
import Text from '../../Text';

export interface MenuProps {
  menu: { label: string; status?: boolean; subLabel?: string }[];
}

const Menu: React.FC<MenuProps> = ({ menu }) => (
  <S.Menu>
    {Array.isArray(menu) && (
      <ul>
        {menu.map(({ label, status, subLabel }) => (
          <li key={label}>
            {typeof status !== 'undefined' && <S.Status status={status} />}
            <S.Content>
              <Text as="span" size="labelLarge">
                {label}
              </Text>
              {subLabel && (
                <Text as="span" colorKey="secondary" size="labelLarge">
                  {subLabel}
                </Text>
              )}
            </S.Content>
          </li>
        ))}
      </ul>
    )}
  </S.Menu>
);

export default Menu;
