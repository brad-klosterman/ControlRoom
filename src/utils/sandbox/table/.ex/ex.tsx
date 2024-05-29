interface TableProps {
  renderRow: React.FC<number>;
}

const Table = (props: TableProps) => {
  return <div>{[0, 1, 3].map(props.renderRow)}</div>;
};

export const Parent = () => {
  return (
    <Table
      renderRow={index => {
        return <div key={index}>{index}</div>;
      }}
    />
  );
};
