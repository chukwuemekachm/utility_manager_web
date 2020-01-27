import Validator from 'validatorjs';

import schema from './schemas';

export async function validatePayload(payload: Record<string, any>, schemaKey: string) {
  const validator = new Validator(payload, schema[schemaKey]);
  const fails = await validator.fails();
  if (fails) {
    const errors = validator.errors.all();
    return errors;
  }
  return null;
}
export function inputValidation(object: object): Array<string> {
  const objectValues = Object.entries(object);
  const errorArray: Array<string> = [];
  objectValues.forEach(([key, value]) => {
    if (String(value).length < 1) {
      errorArray.push(key);
    }
  });
  return errorArray;
}
