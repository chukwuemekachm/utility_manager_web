declare interface Action {
  type: string;
  payload?: Record<string, unknown>;
}

declare interface AuthState {
  status: {
    isAuthenticated: boolean;
    isLoading: boolean;
    isProfileFetched: boolean;
    hasError: boolean;
  };
  profile: Partial<{
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    firstName: string;
    lastName: string;
    imageURL: string;
    verified: boolean;
  }>;
  error: {
    message: string;
    errors: Array<unknown>;
  };
  data: Record<string, unknown>;
  message: string;
}

interface DashBoardState {
  organisations: Array<unknown>;
  meta: Record<string, any>;
  status: {
    isOrganisationFetched: boolean;
    isOrganisationPending: boolean;
    isOrganisationCreating: boolean;
    isOrganisationCreated: boolean;
    hasError: boolean;
  };
  message: string;
}

interface NavigationState {
  data: Record<string, any>;
  nextPageRoute: string;
  status: {
    isRetrieved: boolean;
    isChanged: boolean;
    isPending: boolean;
  };
}

interface NotificationState {
  status: {
    isOpen: boolean;
  };
  type: string;
  message: string;
  duration: number;
}

declare interface AppState {
  auth: AuthState;
  notification: NotificationState;
  navigation: NavigationState;
  dashboard: DashBoardState;
  router: Reducer<RouterState<any>, LocationChangeAction<any>>;
}
