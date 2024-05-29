
```tsx
interface TableProps<TItem> {
  items: TItem[]
  renderItem: (item: TItem) => React.ReactNode
}

export function Table<TItem>(props: TableProps<TItem>) {
  return null
}

const Component = () => {
  return (
    <Table<{ id: number }>
      items={[{ id: "1", name: "Matt" }]}
      renderItem={(item) => <div>{item.id}</div>}
    ></Table>
  )
}
```


```tsx
const AppProvider = ({ message }: AppProps) => {
  return (
    <Grid>
      <Module<{ id: leaderboard; grid: [[0, 15],[0, 1]]; }> 
        tabs={[
          { nav: overactive_customers },
          { nav: top_positive_alarm_types },
          { nav: top_false_alarm_types },
          { nav: top_false_alarm_reasons },
        ]}
      />
      <Module<{ id: alarm_stacks; grid: [[0, 15],[0, 1]]; }> />
    </Grid>
  )
};
```

```ts
type TestObj = {
  a: 'a';
  a2: 'a2';
  a3: 'a3';
  b: 'b';
  b1: 'b1';
  b2: 'b2';
};

// use to get the type of a subroute
type ValuesOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>,
> = {
  [K in _ExtractedKeys]: Obj[K];
}[_ExtractedKeys];

type NewUnion = ValuesOfKeysStartingWithA<TestObj>;

interface GlobalReducerEvent {
  LOG_IN: {};
}

export type GlobalReducer<TState> = (
  state: TState,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
    type: EventType;
  } & GlobalReducerEvent[EventType];
  }[keyof GlobalReducerEvent],
) => TState;

export const userReducer: GlobalReducer<{ id: string }> = (state, event) => {
// event.type === 'LOG_IN'
// event.type === 'ADD_TODO'
  return state;
};
```

```ts
const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[]
}

objectKeys(myObject).forEach((key) => {
  console.log(myObject[key])
})
```
```tsx
import { useEffect, useState } from "react";

/**
 * A discriminated tuple!
 *
 * The really cool thing about this is that TypeScript can infer the type
 * even after it's been destructured.
 */
export type Result<T> =
  | ["loading", undefined?]
  | ["success", T]
  | ["error", Error];

export const useData = <T,>(url: string): Result<T> => {
  const [result, setResult] = useState<Result<T>>(["loading"]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(["success", data]))
      .catch((error) => setResult(["error", error]));
  }, [url]);

  return result;
};

const Component = () => {
  const [status, value] = useData<{ title: string }>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {value.message}</div>;
  }

  return <div>{value.title}</div>;
};
```

```ts
type EmbeddedPlaygroundProps =
  | {
      useStackblitz: true;
      stackblitzId: string;
    }
  | {
      useStackblitz?: false;
      codeSandboxId: string;
    };
```

```ts
interface SummaryProps<T extends object, K extends keyof T> {
  data: T;
  property: K;
}

export function Summary<T extends object, K extends keyof T>({
  data,
  property,
}: SummaryProps<T, K>) {
  const value = data[property] as string;

  return (
    <div>
      {(typeof property === "string") ? (
        <p>
          {property}: {value}{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
```

```ts
export const makeKeyRemover = 
  <Key extends string>(keys: Key[]) => 
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };

const newObject = keyRemover({a: 1, b: 2, c: 3});
```

```ts
export const curryFunction =
  <T>(t: T) =>
  <U>(u: U) =>
  <V>(v: V) => {
    return {
      t,
      u,
      v,
    };
  };

const result = curryFunction(1)(2)(3);
```

```ts
interface Events {
  click: {
    x: number;
    y: number;
  };
  focus: undefined;
}

export const sendEvent = <TEventKey extends keyof Events>(
  event: TEventKey,
  ...args: Events[TEventKey] extends undefined
    ? []
    : [payload: Events[TEventKey]]
) => {
  // Send the event somewhere!
};
```
