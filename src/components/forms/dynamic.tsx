import {
  FieldValues,
  useFieldArray,
  useForm,
  UseFormGetValues,
  UseFormHandleSubmit
} from 'react-hook-form';

////////////////////////////////////////////////////////////////////////////////
/*


*/

// GENERIC FORM
////////////////////////////////////////////////////////////////////////////////

const SearchBar = <TFields extends FieldValues>(default_values: TFields) => {
  const form = useForm<{
    params: { value: string; position: number }[];
  }>({
    //defaultValues: defaultValues as DefaultValues<TValues>
    defaultValues: {
      params: [
        { value: '1', position: 1 },
        { value: '2', position: 2 }
      ]
    }
  });
  const field_array = useFieldArray({
    name: 'params',
    control: form.control
  });

  const watch_form_array = form.watch('params');
  const controlled_fields = field_array.fields.map((field, index) => {
    return {
      ...field,
      ...watch_form_array[index]
    };
  });

  return {
    handleSubmit: form.handleSubmit,
    getValues: form.getValues
  };
};
