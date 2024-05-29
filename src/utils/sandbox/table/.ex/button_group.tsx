interface Button<TValue> {
  name: TValue;
  label: string;
}

interface Props<T> {
  buttons: Button<T>[];
  onClick: (value: T) => void;
}

const ButtonGroup = <T extends string>(
  props: Props<T>
) => {
  return (
    <div>
      {props.buttons.map(button => {
        return (
          <button
            key={button.name}
            onClick={() => {
              props.onClick(button.name);
            }}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

const Comp = () => (
  <ButtonGroup
    buttons={[
      {
        name: 'add',
        label: 'Add'
      },
      {
        name: 'delete',
        label: 'Delete'
      }
    ]}
    onClick={value => {
      console.log(value);
    }}
  ></ButtonGroup>
);
