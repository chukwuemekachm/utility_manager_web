import * as React from 'react';
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import __globalCss from 'settings/__global.css';
import store, { history } from 'store';
import Pages from 'components/pages';
import SnackBar from 'components/ui/SnackBar';
import ErrorBoundary from 'components/HOC/ErrorBoundary';

export default function App(): React.ReactElement<{}> {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Global styles={__globalCss} />
          <Pages />
          <SnackBar />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
}
