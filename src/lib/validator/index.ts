import Validator from 'validatorjs';

import schema from './schemas';

export async function validatePayload(payload: Record<string, any>, schemaKey: string) {
  const validator = new Validator(payload, schema[schemaKey]);
  const fails = await validator.fails();
  if (fails) {
    const errors = validator.errors.all();
    return errors
  }
  return null;
};
