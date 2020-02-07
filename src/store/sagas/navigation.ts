import { takeLatest, all, fork, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { navigationConstants, storeDataFromPrevPages } from 'store/actions/navigation';

export function* nextPage(action) {
  yield put(push(action.payload.nextPageRoute));
}

export function* loadCurrentPage() {
  const getRouter = state => state.router;
  const router = yield select(getRouter);
  yield put(storeDataFromPrevPages({ data: router.location.state }));
}

export function* watchNextPage() {
  yield takeLatest(navigationConstants.NAVIGATION_CHANGE, nextPage);
}

export function* watchLoadCurrentPage() {
  yield takeLatest(navigationConstants.NAVIGATION_RETRIEVE_REQUEST, loadCurrentPage);
}

export default function* navigationSaga() {
  yield all([fork(watchNextPage), fork(watchLoadCurrentPage)]);
}
