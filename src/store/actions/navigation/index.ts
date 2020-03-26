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

export const showNavigationMenu = (): Action => ({
  type: navigationConstants.SHOW_NAVIGATION_MENU,
});

export const hideNavigationMenu = (): Action => ({
  type: navigationConstants.HIDE_NAVIGATION_MENU,
});

export { navigationConstants };
