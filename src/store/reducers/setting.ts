import { settingsConstants } from 'store/actions/setting';
import { updateStateOnCreate, updateStateOnFetch } from 'helpers/reducerHelpers';
import { defaultMeta, defaultFetchState, defaultCreateData } from 'utils/constants';

export interface SingleApplianceCategory {
  fetching: boolean;
  fetched: boolean;
  data: Record<string, any>;
}

interface StateType {
  orgId: string;
  parameters: FetchDataType;
  applianceCategory: FetchDataType;
  singleApplianceCategory: SingleApplianceCategory;
  units: FetchDataType;
  searchedUnits: FetchDataType;
  appliance: FetchDataType;
  createApplianceCategory: CreateObjectType;
  createParameter: CreateObjectType;
  createAppliance: CreateObjectType;

  justCreated: boolean;
}

const initialState: StateType = {
  orgId: '',
  singleApplianceCategory: {
    fetching: false,
    fetched: false,
    data: {
      id: '',
      name: '',
      description: '',
      editable: false,
      createdAt: '',
      updatedAt: '',
      suggestedParameters: [],
      createdBy: {},
    },
  },
  parameters: defaultFetchState,
  applianceCategory: defaultFetchState,
  appliance: defaultFetchState,
  units: defaultFetchState,
  searchedUnits: defaultFetchState,
  createApplianceCategory: defaultCreateData,
  createParameter: defaultCreateData,
  createAppliance: defaultCreateData,
  justCreated: false,
};

const defaultPayload = {
  data: [],
  organisations: [],
  params: {
    orgId: '',
  },
  meta: defaultMeta,
  categoriesData: undefined,
  appliancesData: undefined,
  errors: {},
};

export default function settingsReducer(state = initialState, { type, payload = defaultPayload }) {
  const { data } = payload;
  switch (type) {
    case settingsConstants.RESET_SETTING_STATUS:
      return {
        ...state,
        parameters: {
          ...state.parameters,
          fetched: false,
          fetching: false,
        },
        applianceCategory: {
          ...state.applianceCategory,
          fetched: false,
          fetching: false,
        },
        units: {
          ...state.units,
          fetched: false,
          fetching: false,
        },
      };
    case settingsConstants.JUST_CREATED_DATA:
      return {
        ...state,
        justCreated: !!payload,
      };

    case settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_REQUEST:
      return {
        ...state,
        singleApplianceCategory: {
          ...state.singleApplianceCategory,
          fetching: true,
          fetched: false,
        },
      };
    case settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_SUCCESS:
      return {
        ...state,
        singleApplianceCategory: {
          ...state.singleApplianceCategory,
          fetching: false,
          fetched: true,
          data,
        },
      };
    case settingsConstants.FETCH_SINGLE_APPLIANCE_CATEGORY_ERROR:
      return {
        ...state,
        singleApplianceCategory: {
          ...state.singleApplianceCategory,
          fetching: false,
          fetched: false,
          data: {},
        },
      };

    case settingsConstants.FETCH_APPLIANCES_REQUEST:
    case settingsConstants.FETCH_APPLIANCES_SUCCESS:
    case settingsConstants.FETCH_APPLIANCES_ERROR:
      return updateStateOnFetch(type, 'appliance', state, payload);

    case settingsConstants.SEARCH_UNITS_REQUEST:
    case settingsConstants.SEARCH_UNITS_SUCCESS:
    case settingsConstants.SEARCH_UNITS_ERROR:
      return updateStateOnFetch(type, 'searchedUnits', state, payload);

    case settingsConstants.FETCH_UNITS_REQUEST:
    case settingsConstants.FETCH_UNITS_SUCCESS:
    case settingsConstants.FETCH_UNITS_ERROR:
      return updateStateOnFetch(type, 'units', state, payload);

    case settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST:
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_SUCCESS:
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_ERROR:
      return updateStateOnFetch(type, 'applianceCategory', state, payload);

    case settingsConstants.FETCH_PARAMETERS_REQUEST:
    case settingsConstants.FETCH_PARAMETERS_SUCCESS:
    case settingsConstants.FETCH_PARAMETERS_ERROR:
      return updateStateOnFetch(type, 'parameters', state, payload);

    case settingsConstants.CREATE_APPLIANCE_CATEGORY_REQUEST:
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_SUCCESS:
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_ERROR:
      return updateStateOnCreate(type, 'createApplianceCategory', state, payload, 'applianceCategory');

    case settingsConstants.CREATE_APPLIANCE_REQUEST:
    case settingsConstants.CREATE_APPLIANCE_ERROR:
    case settingsConstants.CREATE_APPLIANCE_SUCCESS:
      return updateStateOnCreate(type, 'createAppliance', state, payload, 'appliance');

    case settingsConstants.CREATE_PARAMETERS_REQUEST:
    case settingsConstants.CREATE_PARAMETERS_SUCCESS:
    case settingsConstants.CREATE_PARAMETERS_ERROR:
      return updateStateOnCreate(type, 'createParameter', state, payload, 'parameters');

    default:
      return state;
  }
}
