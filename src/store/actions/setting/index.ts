import * as settingsConstants from './constants';

export const fetchApplianceCategory = (payload): Action => ({
  type: settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST,
  payload,
});

export const fetchAppliances = (payload): Action => ({
  type: settingsConstants.FETCH_APPLIANCES_REQUEST,
  payload,
});

export const fetchAppliancesSuccess = (payload): Action => ({
  type: settingsConstants.FETCH_APPLIANCES_SUCCESS,
  payload,
});
export const fetchAppliancesError = (payload): Action => ({
  type: settingsConstants.FETCH_APPLIANCES_ERROR,
  payload,
});

export const fetchSingleApplianceCategory = (payload): Action => ({
  type: settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_REQUEST,
  payload,
});

export const fetchParameters = (payload): Action => ({
  type: settingsConstants.FETCH_PARAMETERS_REQUEST,
  payload,
});

export const fetchUnits = (payload): Action => ({
  type: settingsConstants.FETCH_UNITS_REQUEST,
  payload,
});
export const fetchApplianceCategoryError = (): Action => ({
  type: settingsConstants.FETCH_APPLIANCE_CATEGORY_ERROR,
});

export const fetchParametersError = (payload): Action => ({
  type: settingsConstants.FETCH_PARAMETERS_ERROR,
  payload,
});

export const fetchUnitsError = (payload): Action => ({
  type: settingsConstants.FETCH_UNITS_ERROR,
  payload,
});

export const fetchApplianceCategorySuccess = (payload): Action => ({
  type: settingsConstants.FETCH_APPLIANCE_CATEGORY_SUCCESS,
  payload,
});

export const fetchSingleApplianceCategorySuccess = (payload): Action => ({
  type: settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_SUCCESS,
  payload,
});

export const fetchParametersSuccess = (payload): Action => ({
  type: settingsConstants.FETCH_PARAMETERS_SUCCESS,
  payload,
});

export const fetchUnitsSuccess = (payload): Action => ({
  type: settingsConstants.FETCH_UNITS_SUCCESS,
  payload,
});

export const closeModal = (payload): Action => ({
  type: settingsConstants.JUST_CREATED_DATA,
  payload,
});

export const createApplianceCategory = (payload): Action => ({
  type: settingsConstants.CREATE_APPLIANCE_CATEGORY_REQUEST,
  payload,
});

export const createParameters = (payload): Action => ({
  type: settingsConstants.CREATE_PARAMETERS_REQUEST,
  payload,
});

export const createUnits = (payload): Action => ({
  type: settingsConstants.CREATE_UNITS_REQUEST,
  payload,
});

export const createAppliance = (payload): Action => ({
  type: settingsConstants.CREATE_APPLIANCE_REQUEST,
  payload,
});
export const createApplianceSuccess = (payload): Action => ({
  type: settingsConstants.CREATE_APPLIANCE_SUCCESS,
  payload,
});

export const createApplianceError = (payload): Action => ({
  type: settingsConstants.CREATE_APPLIANCE_ERROR,
  payload,
});

export const resetSettingsStatus = (payload): Action => ({
  type: settingsConstants.RESET_SETTING_STATUS,
  payload,
});
export const fetchSingleApplianceCategoryError = (payload): Action => ({
  type: settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_ERROR,
  payload,
});

export const createApplianceCategoryError = (payload): Action => ({
  type: settingsConstants.CREATE_APPLIANCE_CATEGORY_ERROR,
  payload,
});

export const createParametersError = (payload): Action => ({
  type: settingsConstants.CREATE_PARAMETERS_ERROR,
  payload,
});

export const createUnitsError = (payload): Action => ({
  type: settingsConstants.CREATE_UNITS_ERROR,
  payload,
});

export const createApplianceCategorySuccess = (payload): Action => ({
  type: settingsConstants.CREATE_APPLIANCE_CATEGORY_SUCCESS,
  payload,
});

export const createParametersSuccess = (payload): Action => ({
  type: settingsConstants.CREATE_PARAMETERS_SUCCESS,
  payload,
});

export const createUnitsSuccess = (payload): Action => ({
  type: settingsConstants.CREATE_UNITS_SUCCESS,
  payload,
});

export const searchUnits = (payload): Action => ({
  type: settingsConstants.SEARCH_UNITS_REQUEST,
  payload,
});

export const searchUnitsSuccess = (payload): Action => ({
  type: settingsConstants.SEARCH_UNITS_SUCCESS,
  payload,
});
export const searchUnitsError = (payload): Action => ({
  type: settingsConstants.SEARCH_UNITS_ERROR,
  payload,
});

export { settingsConstants };
