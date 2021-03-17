import { ACTION_TYPES } from "../../constants";

export interface UserI {
    name?: string,
    surname?: string,
    telphone?: number,
    email?: string,
}

export interface PayloadUserRegisterI {
    user: UserI,
    linkVerification: string,
    message: string,
} 

export interface PayloadUserVerificationI {
    user: UserI,
    message: string,
} 

export interface AuthStateI {
    loading: boolean,
    user: UserI,
    isAuth: boolean,
    isAdmin: boolean,
    linkVerification: null | string,
    error: null | string,
}

interface StartedRequestRegister {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER,
    payload: boolean,
}

interface RequestRegisterSuccess {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_SUCCESS,
    payload: PayloadUserRegisterI,
}

interface RequestRegisterFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE,
    payload: null | string,
}

export type RegisterActionTypes = StartedRequestRegister | RequestRegisterSuccess | RequestRegisterFailure;

interface StartedRequestVerification {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_VERIFICATION,
    payload: boolean,
}

interface RequestVerificationSuccess {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_SUCCESS,
    payload: PayloadUserVerificationI,
}

interface RequestVerificationFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_FAILURE,
    payload: null | string,
}

export type VerificationActionTypes = StartedRequestVerification | RequestVerificationSuccess | RequestVerificationFailure; 

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
                            | StartedRequestVerification | RequestVerificationSuccess | RequestVerificationFailure
                            | StartedRequestLogin | RequestLoginSuccess | RequestLoginFailure;