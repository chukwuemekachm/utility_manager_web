import * as settingsConstants from './constants';
const {
  FETCH_APPLIANCE_CATEGORY_REQUEST,
  FETCH_APPLIANCE_CATEGORY_ERROR,
  FETCH_PARAMETERS_REQUEST,
  FETCH_PARAMETERS_ERROR,
  FETCH_UNITS_REQUEST,
  FETCH_UNITS_ERROR,
  FETCH_APPLIANCE_CATEGORY_SUCCESS,
  FETCH_PARAMETERS_SUCCESS,
  FETCH_UNITS_SUCCESS,
} = settingsConstants;

export const fetchApplianceCategory = (payload): Action => ({
  type: FETCH_APPLIANCE_CATEGORY_REQUEST,
  payload,
});

export const fetchParameters = (payload): Action => ({
  type: FETCH_PARAMETERS_REQUEST,
  payload,
});

export const fetchUnits = (payload): Action => ({
  type: FETCH_UNITS_REQUEST,
  payload,
});
export const fetchApplianceCategoryError = (): Action => ({
  type: FETCH_APPLIANCE_CATEGORY_ERROR,
});

export const fetchParametersError = (payload): Action => ({
  type: FETCH_PARAMETERS_ERROR,
  payload,
});

export const fetchUnitsError = (payload): Action => ({
  type: FETCH_UNITS_ERROR,
  payload,
});

export const fetchApplianceCategorySuccess = (payload): Action => ({
  type: FETCH_APPLIANCE_CATEGORY_SUCCESS,
  payload,
});

export const fetchParametersSuccess = (payload): Action => ({
  type: FETCH_PARAMETERS_SUCCESS,
  payload,
});

export const fetchUnitsSuccess = (payload): Action => ({
  type: FETCH_UNITS_SUCCESS,
  payload,
});

export { settingsConstants };
