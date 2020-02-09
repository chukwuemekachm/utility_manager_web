import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from 'store/reducers';
import { logger, crashReporter } from 'store/custom_middlewares';
import rootSaga from 'store/sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(logger, crashReporter, routerMiddleware(history), sagaMiddleWare)),
  );
  sagaMiddleWare.run(rootSaga);

  return store;
}
