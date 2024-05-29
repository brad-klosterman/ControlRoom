import * as S from './styles';

interface CheckboxProps {
  onChange?: (value: boolean) => void;
  size?: 'sm' | 'md';
  disabled?: boolean;
  value: boolean;
}

const Checkbox = ({ disabled, onChange, size, value }: CheckboxProps) => {
  const onClick = (): void => {
    if (disabled) {
      return;
    }

    onChange?.(!value);
  };

  return (
    <S.Checkbox
      checked={value}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      <S.Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </S.Icon>
    </S.Checkbox>
  );
};

export { Checkbox };
export type { CheckboxProps };
