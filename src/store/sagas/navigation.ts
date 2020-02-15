/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, all, fork, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  navigationConstants,
  storeDataFromPrevPages,
  showNavigationMenu,
  hideNavigationMenu,
} from 'store/actions/navigation';

export function* nextPage(action) {
  yield put(push(action.payload.nextPageRoute));
}

export function* loadCurrentPage() {
  const getRouter = state => state.router;
  const router = yield select(getRouter);
  yield put(storeDataFromPrevPages({ data: router.location.state }));
}

export function* loadNavigationMenu() {
  yield put(showNavigationMenu());
}

export function* dismisNavigationMenu() {
  yield put(hideNavigationMenu());
}

export function* watchNextPage() {
  yield takeLatest(navigationConstants.NAVIGATION_CHANGE, nextPage);
}

export function* watchLoadCurrentPage() {
  yield takeLatest(navigationConstants.NAVIGATION_RETRIEVE_REQUEST, loadCurrentPage);
}

export function* watchLoadNavigationMenu() {
  yield takeLatest(navigationConstants.SHOW_NAVIGATION_MENU, loadNavigationMenu);
}

export function* watchDismisNavigationMenu() {
  yield takeLatest(navigationConstants.HIDE_NAVIGATION_MENU, dismisNavigationMenu);
}

export default function* navigationSaga() {
  yield all([fork(watchNextPage), fork(watchLoadCurrentPage)]);
}
