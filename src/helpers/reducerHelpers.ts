export function updateStateOnFetch(action, key, state, payload) {
  const { data, meta } = payload;
  const status = action
    .split('_')
    .pop()
    .toUpperCase();
  if (status === 'SUCCESS') {
    let finalData = data;
    if (meta.currentPage > 1) {
      finalData = [...state[key].data, ...data];
    }

    return {
      ...state,
      [key]: {
        ...state[key],
        fetching: false,
        fetched: true,
        data: finalData,
        meta,
      },
    };
  } else if (status === 'ERROR') {
    return {
      ...state,
      [key]: {
        ...state[key],
        fetching: false,
        fetched: false,
        data: [],
      },
    };
  } else if (status === 'REQUEST') {
    return {
      ...state,
      [key]: {
        ...state[key],
        fetching: true,
        fetched: false,
      },
    };
  }
}

export function updateStateOnCreate(action, key, state, payload, fetchKey?: string) {
  const { data } = payload;
  const status = action
    .split('_')
    .pop()
    .toUpperCase();
  if (status === 'SUCCESS') {
    let fetchKeyObj = {};
    if (fetchKey) {
      fetchKeyObj = {
        [fetchKey]: {
          ...state[fetchKey],
          fetching: false,
          data: [data, ...state[fetchKey].data],
        },
      };
    }
    return {
      ...state,
      ...fetchKeyObj,
      [key]: {
        ...state[key],
        creating: false,
        created: true,
        data,
        errors: {},
      },
    };
  } else if (status === 'ERROR') {
    return {
      ...state,
      [key]: {
        ...state[key],
        creating: false,
        created: false,
        data: {},
        errors: payload.errors,
      },
    };
  } else if (status === 'REQUEST') {
    return {
      ...state,
      [key]: {
        ...state[key],
        creating: true,
        created: false,
        errors: {},
      },
    };
  }
}
