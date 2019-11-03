import * as React from 'react';
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';

import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import __globalCss from 'settings/__global.css';
import Authentication from 'components/pages/Authentication';
import store from 'store';

export default function App() {
  return (
    <Provider store={store}>
      <AuthenticationLayout>
        <Global styles={__globalCss} />
        <Authentication />
      </AuthenticationLayout>
    </Provider>
  );
}
