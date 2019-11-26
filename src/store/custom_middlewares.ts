export const logger = store => next => action => {
  console.log('%cDISPATCHING', 'color: #2c96f3;font: 1em "Fira Sans", sans-serif;', action);
  let result = next(action);
  console.log('%cNEXT STATE', 'color: #42c88a; font: 1em "Fira Sans", sans-serif;', store.getState());
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
