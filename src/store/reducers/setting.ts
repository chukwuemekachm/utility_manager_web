import { settingsConstants } from 'store/actions/setting';

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
  justCreated: boolean;
}

const defaultMeta = {
  currentPage: 0,
  nextPage: null,
  previousPage: null,
  totalObjects: 0,
  totalPages: 1,
  maxObjectsPerPage: 0,
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
  parameters: {
    fetching: false,
    fetched: false,
    data: [],
    meta: defaultMeta,
  },
  applianceCategory: {
    fetching: false,
    fetched: false,
    data: [],
    meta: defaultMeta,
  },
  appliance: {
    fetching: false,
    fetched: false,
    data: [],
    meta: defaultMeta,
  },
  units: {
    fetching: false,
    fetched: false,
    data: [],
    meta: defaultMeta,
  },
  searchedUnits: {
    fetching: false,
    fetched: false,
    data: [],
    meta: defaultMeta,
  },
  createApplianceCategory: {
    creating: false,
    created: false,
    data: {},
    errors: {},
  },
  createParameter: {
    creating: false,
    created: false,
    data: {},
    errors: {},
  },
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
  const { data, meta } = payload;
  let finalData;
  switch (type) {
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
          data: payload.categoriesData,
        },
        appliance: {
          ...state.appliance,
          fetching: false,
          fetched: true,
          data: payload.appliancesData,
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
      return {
        ...state,
        searchedUnits: {
          ...state.searchedUnits,
          fetching: true,
          fetched: false,
        },
      };
    case settingsConstants.SEARCH_UNITS_SUCCESS:
      return {
        ...state,
        searchedUnits: {
          ...state.searchedUnits,
          fetching: false,
          fetched: true,
          data,
          meta,
        },
      };
    case settingsConstants.SEARCH_UNITS_ERROR:
      return {
        ...state,
        searchedUnits: {
          ...state.searchedUnits,
          fetching: false,
          fetched: false,
          data: [],
        },
      };
    case settingsConstants.FETCH_UNITS_REQUEST:
      return {
        ...state,
        units: {
          ...state.units,
          fetching: true,
          fetched: false,
        },
      };
    case settingsConstants.FETCH_UNITS_SUCCESS:
      finalData = data;
      if (meta.currentPage > 1) {
        finalData = [...state.units.data, ...data];
      }
      return {
        ...state,
        units: {
          ...state.units,
          fetching: false,
          fetched: true,
          data: finalData,
          meta,
        },
      };
    case settingsConstants.FETCH_UNITS_ERROR:
      return {
        ...state,
        units: {
          ...state.units,
          fetching: false,
          fetched: false,
          data: [],
        },
      };

    case settingsConstants.FETCH_APPLIANCE_CATEGORY_REQUEST:
      return {
        ...state,
        orgId: payload.params.orgId,
        applianceCategory: {
          ...state.applianceCategory,
          fetching: true,
          fetched: false,
        },
      };
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_SUCCESS:
      finalData = data;
      if (meta.currentPage > 1) {
        finalData = [...state.applianceCategory.data, ...data];
      }
      return {
        ...state,
        applianceCategory: {
          ...state.applianceCategory,
          fetching: false,
          fetched: true,
          data: finalData,
          meta,
        },
      };
    case settingsConstants.FETCH_APPLIANCE_CATEGORY_ERROR:
      return {
        ...state,
        applianceCategory: {
          ...state.applianceCategory,
          fetching: false,
          fetched: false,
          data: [],
        },
      };

    case settingsConstants.FETCH_PARAMETERS_REQUEST:
      return {
        ...state,
        parameters: {
          ...state.parameters,
          fetching: true,
          fetched: false,
        },
      };
    case settingsConstants.FETCH_PARAMETERS_SUCCESS:
      finalData = data;
      if (meta.currentPage > 1) {
        finalData = [...state.parameters.data, ...data];
      }
      return {
        ...state,
        parameters: {
          ...state.parameters,
          fetching: false,
          fetched: true,
          data: finalData,
          meta,
        },
      };
    case settingsConstants.FETCH_PARAMETERS_ERROR:
      return {
        ...state,
        parameters: {
          ...state.parameters,
          fetching: false,
          fetched: false,
          data: [],
        },
      };
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_REQUEST:
      return {
        ...state,
        createApplianceCategory: {
          ...state.createApplianceCategory,
          creating: true,
          created: false,
          errors: {},
        },
      };
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_SUCCESS:
      return {
        ...state,
        createApplianceCategory: {
          ...state.createApplianceCategory,
          creating: false,
          created: true,
          data,
          errors: {},
        },
        applianceCategory: {
          ...state.applianceCategory,
          fetching: false,
          fetched: false,
          data: [data, ...state.applianceCategory.data],
        },
      };
    case settingsConstants.CREATE_APPLIANCE_CATEGORY_ERROR:
      return {
        ...state,
        createApplianceCategory: {
          ...state.createApplianceCategory,
          creating: false,
          created: false,
          data: {},
          errors: payload.errors,
        },
      };
    case settingsConstants.CREATE_PARAMETERS_REQUEST:
      return {
        ...state,
        createParameter: {
          ...state.createParameter,
          creating: true,
          created: false,
          errors: {},
        },
      };
    case settingsConstants.CREATE_PARAMETERS_SUCCESS:
      return {
        ...state,
        createParameter: {
          ...state.createParameter,
          creating: false,
          created: true,
          data,
          errors: {},
        },
        parameters: {
          ...state.parameters,
          fetching: false,
          fetched: false,
          data: [data, ...state.parameters.data],
        },
      };
    case settingsConstants.CREATE_PARAMETERS_ERROR:
      return {
        ...state,
        createParameter: {
          ...state.createParameter,
          creating: false,
          created: false,
          data: {},
          errors: payload.errors,
        },
      };
    default:
      return state;
  }
}
