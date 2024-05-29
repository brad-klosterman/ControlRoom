import { forwardRef, ReactNode } from 'react';
import type {
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  RefAttributes,
} from 'react';

import type { DefaultTheme } from 'styled-components';

import * as S from './styles';
import Icon from '../Icon';
import Text from '../Text';

export interface CategoryProps {
  label: string;
}

export interface CategoryFC {
  (props: CategoryProps): ReactElement<any, any>;
}

export enum PopoverEnum {
  cancel = 'Cancel',
  dangerous = 'Dangerous',
  default = 'Default',
}

export interface ItemProps {
  checked?: boolean;
  icon?: keyof typeof Icon;
  label: string;
  onClick?: MouseEventHandler;
  pill?: string;
  variant?: PopoverEnum;
}

export interface ItemFC {
  (props: ItemProps): ReactElement<any, any>;
}

export interface PopoverFC
  extends React.ForwardRefExoticComponent<
    PropsWithChildren<RefAttributes<HTMLDivElement>>
  > {
  Category: CategoryFC;
  Divider: typeof S.Divider;
  Item: ItemFC;
}

export const useVariant = (variant?: PopoverEnum) => {
  let textColor: keyof DefaultTheme['colors']['text'] = 'primary';
  let iconColor: keyof DefaultTheme['colors']['icon'] = 'emphasise';

  switch (variant) {
    case PopoverEnum.dangerous:
      textColor = 'error';
      iconColor = 'error';
      break;
    case PopoverEnum.cancel:
      textColor = 'primary';
      iconColor = 'error';
      break;
    case PopoverEnum.default:
      break;
    default:
      break;
  }

  return { iconColor, textColor };
};

const Category: CategoryFC = ({ label }) => (
  <S.Category>
    <Text as="span" colorKey="emphasise" isBold size="labelLarge">
      {label}
    </Text>
  </S.Category>
);

const Item: ItemFC = ({ checked, icon, label, onClick, variant }) => {
  const { iconColor, textColor } = useVariant(variant);

  const IconComponent = icon && Icon[icon];

  return (
    <S.Item onClick={onClick}>
      {IconComponent && <IconComponent colorKey={iconColor} />}
      <Text as="span" colorKey={textColor} size="labelLarge">
        {label}
      </Text>
      {checked && <Icon.Tick colorKey={iconColor} />}
    </S.Item>
  );
};

type PopoverProps = {
  children: ReactNode;
};

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, ...props }: PopoverProps, ref) => (
    <S.Wrapper ref={ref} {...props}>
      {children}
    </S.Wrapper>
  ),
) as PopoverFC;

Popover.Divider = S.Divider;
Popover.Category = Category;
Popover.Item = Item;

export default Popover;
