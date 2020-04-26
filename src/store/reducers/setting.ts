import { settingsConstants } from 'store/actions/setting';
import { updateStateOnCreate, updateStateOnFetch } from 'helpers/reducerHelpers';

interface Paginator {
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
  totalObjects: number;
  totalPages: number;
  maxObjectsPerPage: number;
}

export interface SettingObjectType {
  fetching: boolean;
  fetched: boolean;
  data: Record<string, any>[];
  meta: Paginator;
  errors?: Record<string, unknown[]>;
}

export interface SingleApplianceCategory {
  fetching: boolean;
  fetched: boolean;
  data: Record<string, any>;
}
export interface CreateObjectType {
  creating: boolean;
  created: boolean;
  data: Record<string, unknown>;
  errors: Record<string, unknown[]>;
}

interface StateType {
  orgId: string;
  parameters: SettingObjectType;
  applianceCategory: SettingObjectType;
  singleApplianceCategory: SingleApplianceCategory;
  units: SettingObjectType;
  searchedUnits: SettingObjectType;
  appliance: SettingObjectType;
  createApplianceCategory: CreateObjectType;
  createParameter: CreateObjectType;
  createAppliance: CreateObjectType;

  justCreated: boolean;
}

export const defaultMeta = {
  currentPage: 0,
  nextPage: null,
  previousPage: null,
  totalObjects: 0,
  totalPages: 1,
  maxObjectsPerPage: 0,
};

const defaultFetchData = {
  fetching: false,
  fetched: false,
  data: [],
  meta: defaultMeta,
};
const defaultCreateData = {
  creating: false,
  created: false,
  data: {},
  errors: {},
};
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
  parameters: defaultFetchData,
  applianceCategory: defaultFetchData,
  appliance: defaultFetchData,
  units: defaultFetchData,
  searchedUnits: defaultFetchData,
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

    case settingsConstants.FETCH_APPLIANCES_REQUEST:
      return updateStateOnFetch('REQUEST', 'appliance', state, payload);
    case settingsConstants.FETCH_APPLIANCES_SUCCESS:
      return updateStateOnFetch('SUCCESS', 'appliance', state, payload);
    case settingsConstants.FETCH_APPLIANCES_ERROR:
      return updateStateOnFetch('ERROR', 'appliance', state, payload);

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
    case settingsConstants.SEARCH_UNITS_REQUEST:
      return updateStateOnFetch(type, 'searchedUnits', state, payload);
    case settingsConstants.SEARCH_UNITS_SUCCESS:
      return updateStateOnFetch(type, 'searchedUnits', state, payload);
    case settingsConstants.SEARCH_UNITS_ERROR:
      return updateStateOnFetch(type, 'searchedUnits', state, payload);
    case settingsConstants.FETCH_UNITS_REQUEST:
      return updateStateOnFetch(type, 'units', state, payload);
    case settingsConstants.FETCH_UNITS_SUCCESS:
      return updateStateOnFetch(type, 'units', state, payload);
    case settingsConstants.FETCH_UNITS_ERROR:
      return updateStateOnFetch(type, 'units', state, payload);
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST:
      return updateStateOnFetch(type, 'applianceCategory', state, payload);
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_SUCCESS:
      return updateStateOnFetch(type, 'applianceCategory', state, payload);
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_ERROR:
      return updateStateOnFetch(type, 'applianceCategory', state, payload);
    case settingsConstants.FETCH_PARAMETERS_REQUEST:
      return updateStateOnFetch(type, 'parameters', state, payload);
    case settingsConstants.FETCH_PARAMETERS_SUCCESS:
      return updateStateOnFetch(type, 'parameters', state, payload);
    case settingsConstants.FETCH_PARAMETERS_ERROR:
      return updateStateOnFetch(type, 'parameters', state, payload);
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_REQUEST:
      return updateStateOnCreate(type, 'createApplianceCategory', state, payload);
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_SUCCESS:
      return updateStateOnCreate(type, 'createApplianceCategory', state, payload, 'applianceCategory');
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_ERROR:
      return updateStateOnCreate(type, 'createApplianceCategory', state, payload);
    case settingsConstants.CREATE_APPLIANCE_REQUEST:
      return updateStateOnCreate(type, 'createAppliance', state, payload);
    case settingsConstants.CREATE_APPLIANCE_SUCCESS:
      return updateStateOnCreate(type, 'createAppliance', state, payload, 'appliance');
    case settingsConstants.CREATE_APPLIANCE_ERROR:
      return updateStateOnCreate(type, 'createAppliance', state, payload, 'appliance');
    case settingsConstants.CREATE_PARAMETERS_REQUEST:
      return updateStateOnCreate(type, 'createParameter', state, payload);
    case settingsConstants.CREATE_PARAMETERS_SUCCESS:
      return updateStateOnCreate(type, 'createParameter', state, payload, 'parameters');
    case settingsConstants.CREATE_PARAMETERS_ERROR:
      return updateStateOnCreate(type, 'createParameter', state, payload, 'parameters');

    default:
      return state;
  }
}
