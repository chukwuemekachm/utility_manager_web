export function pickErrors(formErrors, apiError) {
  let returnedErrors;
  if (Object.keys(formErrors).length) {
    returnedErrors = formErrors;
  } else {
    returnedErrors = apiError;
  }
  return returnedErrors || {};
}
