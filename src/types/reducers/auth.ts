import { ACTION_TYPES } from "../../constants";

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
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_SUCCESS,
    payload: any[],
}

interface RequestRegisterFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE,
    payload: null | string,
}

export type RegisterActionTypes = StartedRequestRegister | RequestRegisterSuccess | RequestRegisterFailure;

interface StartedRequestLogin {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_LOGIN,
    payload: boolean,
}

interface RequestLoginSuccess {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_SUCCESS,
    payload: any[],
}

interface RequestLoginFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_FAILURE,
    payload: null | string,
}

export type LoginActionTypes = StartedRequestLogin | RequestLoginSuccess | RequestLoginFailure;

export type AuthActionTypes = StartedRequestRegister | RequestRegisterSuccess | RequestRegisterFailure 
                            | StartedRequestLogin | RequestLoginSuccess | RequestLoginFailure;