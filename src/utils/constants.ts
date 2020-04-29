export enum STORAGE_KEYS {
  IS_USER_AUTHENTICATED = 'IS_USER_AUTHENTICATED',
}

export enum ImageOptions {
  AVATAR = 'w_300',
}

export const defaultMeta = {
  currentPage: 0,
  nextPage: null,
  previousPage: null,
  totalObjects: 0,
  totalPages: 1,
  maxObjectsPerPage: 0,
};

export const defaultFetchState = {
  fetching: false,
  fetched: false,
  data: [],
  meta: defaultMeta,
  errors: {},
};

export const defaultCreateData = {
  creating: false,
  created: false,
  data: {},
  errors: {},
};
