import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

export type BasicInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  (props, ref) => {
    return <input {...props} ref={ref} />;
  },
);

export default BasicInput;
