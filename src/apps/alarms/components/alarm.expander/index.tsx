import { ReactNode } from 'react';

import Content from './content';
import Row from './row';

const Alarm = (props: { children: ReactNode }) => <>{props.children}</>;

Alarm.Row = Row;
Alarm.Content = Content;

export default Alarm;
