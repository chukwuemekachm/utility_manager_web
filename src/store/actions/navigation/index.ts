import * as navigationConstants from './constants';

export const retrieveLastPageState = () => ({
  type: navigationConstants.NAVIGATION_RETRIEVE_REQUEST,
});

export const storeDataFromPrevPages = payload => ({
  type: navigationConstants.NAVIGATION_RETRIEVED,
  payload,
});

export const moveToNextPage = payload => ({
  type: navigationConstants.NAVIGATION_CHANGE,
  payload,
});

export { navigationConstants };
