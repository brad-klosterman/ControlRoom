export { default as validEmail } from './validEmail';
export * from './validation.id-number';

export function validPhone(phone: string) {
  return /[^\d+x]|x(?=[^x]*x)/gi.test(phone);
}

export const isRequired = {
  required: true,
};

export const validWatchFields = (
  fields: Array<number | string | null | undefined>,
): boolean => {
  return !(
    fields.includes('') ||
    fields.includes(undefined) ||
    fields.includes(null)
  );
};
