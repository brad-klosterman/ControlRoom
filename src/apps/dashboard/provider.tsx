import { ReactElement, ReactNode } from 'react';

import { Customers, Provider } from 'apps/exports';
import { ConnectionProvider } from 'src/app.state/connection/provider';

// todo rely more upon apollo caching
const DashboardProvider: {
  (props: { children: ReactNode }): ReactElement;
} = ({ children }) => (
  <ConnectionProvider>
    <Provider.Areas>
      <Provider.Decoders>
        <Provider.Users>
          <Provider.Responders>
            <Provider.Technicians>
              <Provider.AlarmTypes>
                <Provider.SSP>
                  <Customers.Provider>
                    <Provider.Alarms>{children}</Provider.Alarms>
                  </Customers.Provider>
                </Provider.SSP>
              </Provider.AlarmTypes>
            </Provider.Technicians>
          </Provider.Responders>
        </Provider.Users>
      </Provider.Decoders>
    </Provider.Areas>
  </ConnectionProvider>
);

export default DashboardProvider;
