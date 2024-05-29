import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SSPSettingsProvider from 'apps/admin/company_settings/settings/provider';
import { buildApolloClient } from 'src/apollo/config/config';
import { AuthProvider } from 'src/app.state/auth/provider';
import { BillingProvider } from 'src/app.state/billing';
import { PermissionsProvider } from 'src/app.state/permissions/provider';
import { RolesProvider } from 'src/app.state/roles/provider';
import { GoogleMapsProvider } from 'src/context/google-maps.provider';
import { OfflineProvider } from 'src/offline/offline.provider';
import MainRouter from 'src/routes/router.main';

import { UIProvider } from '../context';
import { ControlRoomApolloClient } from '../apollo';

const ControlRoomApp = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={ControlRoomApolloClient}>
        <UIProvider>
          <GoogleMapsProvider>
            <BrowserRouter>
              <AuthProvider>
                <PermissionsProvider>
                  <RolesProvider>
                    <SSPSettingsProvider>
                      <BillingProvider>
                        <OfflineProvider>
                          <MainRouter />
                        </OfflineProvider>
                      </BillingProvider>
                    </SSPSettingsProvider>
                  </RolesProvider>
                </PermissionsProvider>
              </AuthProvider>
            </BrowserRouter>
          </GoogleMapsProvider>
        </UIProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
};

export { ControlRoomApp };
