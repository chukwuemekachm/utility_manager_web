import { takeLatest, all, fork, put , select} from 'redux-saga/effects';

import {navigationConstants, storeDataFromPrevPages} from "../actions/navigation";
import {replace} from "connected-react-router";

export function* nextPage(action) {
  const getNavigation = (state)=> state.navigation;

  const navigation = yield select(getNavigation);
  yield put(replace(action.payload.nextPageRoute,  navigation.data));
}

export function* loadCurrentPage() {
  const getRouter = (state)=> state.router;
  const router = yield select(getRouter);
  yield put(storeDataFromPrevPages({data:router.location.state}));

}


export function* watchNextPage(){
  yield takeLatest(navigationConstants.NAVIGATION_CHANGE, nextPage);
}

export function* watchLoadCurrentPage(){
  yield takeLatest(navigationConstants.NAVIGATION_RETRIEVE_REQUEST, loadCurrentPage);
}


export default function* navigationSaga() {
  yield all([
    fork(watchNextPage),
    fork(watchLoadCurrentPage),
  ]);
};


