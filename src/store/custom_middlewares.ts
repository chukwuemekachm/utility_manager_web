export const logger = store => next => action => {
  const result = next(action);
  return result;
};

export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    // TODO: Set up store error reporting
    throw err;
  }
};
