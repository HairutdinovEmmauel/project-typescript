import { ACTION_TYPES } from "../constants";

export interface AuthStateI {
    loading: boolean,
    isAuth: boolean,
    isAdmin: boolean,
    error: null | string,
}

interface StartedRequestRegister {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER,
    payload: boolean,
}

interface RequestRegisterSuccess {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER,
    payload: boolean,
}

interface RequestRegisterFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE,
    payload: boolean,
}

export type AuthActionTypes = StartedRequestRegister | RequestRegisterSuccess | RequestRegisterFailure;