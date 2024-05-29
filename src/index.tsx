import { createRoot } from 'react-dom/client';

import { ControlRoomApp } from 'apps';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<ControlRoomApp />);
