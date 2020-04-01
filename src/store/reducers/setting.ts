import { settingsConstants } from 'store/actions/setting';

export interface SettingObjectType {
  fetching: boolean;
  fetched: boolean;
  data: Record<string, unknown>[];
  meta: {
    currentPage: number;
    nextPage: number | null;
    previousPage: number | null;
    totalObjects: number;
    totalPages: number;
    maxObjectsPerPage: number;
  } | null;
}

interface StateType {
  orgId: string;
  parameters: SettingObjectType;
  applianceCategory: SettingObjectType;
  units: SettingObjectType;
  appliance: SettingObjectType;
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
};

const defaultPayload = {
  data: [],
  organisations: [],
  params: {
    orgId: '',
  },
  meta: null,
};

export default function settingsReducer(state = initialState, { type, payload = defaultPayload }) {
  const { data, meta } = payload;
  switch (type) {
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
    default:
      return state;
  }
}
