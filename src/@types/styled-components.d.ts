/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from 'styled-components';

import generateTheme from 'theme';

declare module 'styled-components' {
  type Theme = ReturnType<typeof generateTheme>;
  export interface DefaultTheme extends Theme {}
}

declare module 'apps/dashboard/dashboard' {}
