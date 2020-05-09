import * as React from 'react';
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import __globalCss from 'settings/__global.css';
import store, { history } from 'store';
import Pages from 'components/pages';
import SnackBar from 'components/ui/SnackBar';
import ErrorBoundary from 'components/HOC/ErrorBoundary';
import HamBurgerMenu from './components/ui/HamBurgerMenu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: ["'Fira Sans'", 'sans-serif'].join(','),
  },
});

export default function App(): React.ReactElement<{}> {
  return (
    <ThemeProvider theme={THEME}>
      <ErrorBoundary>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Global styles={__globalCss} />
            <Pages />
            <SnackBar />
            <HamBurgerMenu />
          </ConnectedRouter>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
