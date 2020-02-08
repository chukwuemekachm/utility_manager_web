import * as navigationConstants from './constants';

export const retrieveLastPageState = (): Action => ({
  type: navigationConstants.NAVIGATION_RETRIEVE_REQUEST,
});

export const storeDataFromPrevPages = (payload): Action => ({
  type: navigationConstants.NAVIGATION_RETRIEVED,
  payload,
});

export const moveToNextPage = (payload): Action => ({
  type: navigationConstants.NAVIGATION_CHANGE,
  payload,
});

export { navigationConstants };
