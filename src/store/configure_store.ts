import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
 
import createRootReducer from './reducers';
import { logger, crashReporter } from './custom_middlewares';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const sagaMiddleWare = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(logger, crashReporter, routerMiddleware(history), sagaMiddleWare)),
  );
  sagaMiddleWare.run(rootSaga);

  return store;
}
