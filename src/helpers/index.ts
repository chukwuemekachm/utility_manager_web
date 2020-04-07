export function pickErrors(formErrors, apiError) {
  let returnedErrors;
  if (Object.keys(formErrors).length) {
    returnedErrors = formErrors;
  } else {
    returnedErrors = apiError;
  }
  return returnedErrors || {};
}

export function parseText(text: string, limit?: number) {
  if (limit && text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
}
