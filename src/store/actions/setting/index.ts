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
  CREATE_APPLIANCE_CATEGORY_REQUEST,
  CREATE_PARAMETERS_REQUEST,
  CREATE_UNITS_REQUEST,
  CREATE_APPLIANCE_CATEGORY_ERROR,
  CREATE_PARAMETERS_ERROR,
  CREATE_UNITS_ERROR,
  CREATE_APPLIANCE_CATEGORY_SUCCESS,
  CREATE_PARAMETERS_SUCCESS,
  CREATE_UNITS_SUCCESS,
  JUST_CREATED_DATA,
  SEARCH_UNITS_SUCCESS,
  SEARCH_UNITS_ERROR,
  SEARCH_UNITS_REQUEST,
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

export const closeModal = (payload): Action => ({
  type: JUST_CREATED_DATA,
  payload,
});

export const createApplianceCategory = (payload): Action => ({
  type: CREATE_APPLIANCE_CATEGORY_REQUEST,
  payload,
});

export const createParameters = (payload): Action => ({
  type: CREATE_PARAMETERS_REQUEST,
  payload,
});

export const createUnits = (payload): Action => ({
  type: CREATE_UNITS_REQUEST,
  payload,
});

export const createApplianceCategoryError = (payload): Action => ({
  type: CREATE_APPLIANCE_CATEGORY_ERROR,
  payload,
});

export const createParametersError = (payload): Action => ({
  type: CREATE_PARAMETERS_ERROR,
  payload,
});

export const createUnitsError = (payload): Action => ({
  type: CREATE_UNITS_ERROR,
  payload,
});

export const createApplianceCategorySuccess = (payload): Action => ({
  type: CREATE_APPLIANCE_CATEGORY_SUCCESS,
  payload,
});

export const createParametersSuccess = (payload): Action => ({
  type: CREATE_PARAMETERS_SUCCESS,
  payload,
});

export const createUnitsSuccess = (payload): Action => ({
  type: CREATE_UNITS_SUCCESS,
  payload,
});

export const searchUnits = (payload): Action => ({
  type: SEARCH_UNITS_REQUEST,
  payload,
});

export const searchUnitsSuccess = (payload): Action => ({
  type: SEARCH_UNITS_SUCCESS,
  payload,
});
export const searchUnitsError = (payload): Action => ({
  type: SEARCH_UNITS_ERROR,
  payload,
});

export { settingsConstants };
