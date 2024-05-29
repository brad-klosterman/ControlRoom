import { ReactNode } from 'react';

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map(row => (
          <tr>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

interface User {
  id: number;
  name: string;
  age: number;
}

const APPRoute = () => (
    <Table<User>
      renderRow={row => {
        return <td>{row.name}</td>;
      }}
      rows={[
        {
          id: 1,
          name: 'John',
          age: 30
        },
        {
          id: 2,
          name: 'Jane',
          age: 30
        }
      ]}
    ></Table>

);
