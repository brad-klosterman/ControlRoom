import type { InputHTMLAttributes, FC } from 'react';
import InputMask, { Props } from 'react-input-mask';

/**
 * Mask string. Format characters are:
 * * `9`: `0-9`
 * * `a`: `A-Z, a-z`
 * * `\*`: `A-Z, a-z, 0-9`
 *
 * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
 * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
 */

type MaskedInputProps = InputHTMLAttributes<HTMLInputElement> & Props;

// type InputProps = DetailedHTMLProps<
//   InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement
// > &
//   Props;

const MaskedInput: FC<MaskedInputProps> = ({ name, ...props }) => (
  <InputMask {...props} id={name} name={name} />
);

export default MaskedInput;
