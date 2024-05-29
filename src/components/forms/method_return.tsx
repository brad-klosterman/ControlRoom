import React, { ReactNode } from 'react';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  FieldValues
} from 'react-hook-form';

import { Form } from 'components';

interface Param<PName> {
  name: PName;
  label: string;
}

type SearchBarProps<TParams extends FieldValues> = {
  onSubmit: SubmitHandler<TParams>;
  params: Param<TParams>[];
  children: (methods: UseFormReturn<TParams>) => React.ReactNode;
};

const SearchBar = <TParams extends Record<string, any> = Record<string, any>>({
  children,
  onSubmit
}: SearchBarProps<TParams>) => {
  const methods = useForm<TParams>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type Params = {
  id: number;
  name: string;
  type: 'mobile' | 'transmitter';
};

function AlarmHistoryRoute() {
  const onSubmit = (data: Params) => alert(JSON.stringify(data));

  return (
    <SearchBar<Params> onSubmit={onSubmit} params={[]}>
      {({ control }) => (
        <>
          <Form.Input {...{ control }} label="Alarm ID" name="id" small />
        </>
      )}
    </SearchBar>
  );
}

// interface TableProps<T> {
//   rows: T[];
//   renderRow: (row: T) => ReactNode;
// }
//
// export const Table = <T,>(props: TableProps<T>) => {
//   return (
//     <table>
//       <tbody>
//       {props.rows.map(row => (
//         <tr>{props.renderRow(row)}</tr>
//       ))}
//       </tbody>
//     </table>
//   );
// };
//
// const HistoryTable = () => (
//   <Table<Params>
//     renderRow={row => {
//       return <td>{row.name}</td>;
//     }}
//     rows={[
//       {
//         id: 1,
//         name: 'John',
//         age: 30
//       },
//       {
//         id: 2,
//         name: 'Jane',
//         age: 30
//       }
//     ]}
//   ></Table>
// );
