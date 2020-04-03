import { settingsConstants } from 'store/actions/setting';

interface Paginator {
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
  totalObjects: number;
  totalPages: number;
  maxObjectsPerPage: number;
}

type MetaType = Paginator | null;

export interface SettingObjectType {
  fetching: boolean;
  fetched: boolean;
  data: Record<string, unknown>[];
  meta: MetaType;
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
  units: SettingObjectType;
  appliance: SettingObjectType;
  createApplianceCategory: CreateObjectType;
  justCreated: boolean;
}

const initialState: StateType = {
  orgId: '',
  parameters: {
    fetching: false,
    fetched: false,
    data: [],
    meta: null,
  },
  applianceCategory: {
    fetching: false,
    fetched: false,
    data: [],
    meta: null,
  },
  appliance: {
    fetching: false,
    fetched: false,
    data: [],
    meta: null,
  },
  units: {
    fetching: false,
    fetched: false,
    data: [],
    meta: null,
  },
  createApplianceCategory: {
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
  meta: null,
  errors: {},
};

export default function settingsReducer(state = initialState, { type, payload = defaultPayload }) {
  const { data, meta } = payload;
  switch (type) {
    case settingsConstants.JUST_CREATED_DATA:
      return {
        ...state,
        justCreated: !!payload,
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
      return {
        ...state,
        units: {
          ...state.units,
          fetching: false,
          fetched: true,
          data,
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
      return {
        ...state,
        applianceCategory: {
          ...state.applianceCategory,
          fetching: false,
          fetched: true,
          data,
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
      return {
        ...state,
        parameters: {
          ...state.parameters,
          fetching: false,
          fetched: true,
          data,
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
    default:
      return state;
  }
}
