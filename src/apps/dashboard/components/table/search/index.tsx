import { FieldValues } from 'react-hook-form';

import { Form } from 'components';

import { SearchBarProps } from './types';

function SearchBar<T extends FieldValues>(props: SearchBarProps<T>) {
  return (
    <>
      {props.fields.map(field => {
        return (
          <Form.Input
            control={props.control}
            label="Alarm ID"
            name={field.name}
            small
          />
        );
      })}
    </>
  );
}

export default SearchBar;
