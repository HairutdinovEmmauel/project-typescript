import { ACTION_TYPES } from "../../constants";

export interface RegisterDataUserI {
    email: string,
}

export interface FullDataUserI {
    name: string,
    surname: string,
    telphone: number,
    email: string,
}

export interface PayloadUserRegisterI {
    user: UserI,
    message: string,
} 

export interface PayloadFullDataUser {
    user: FullDataUserI,
    token: string,
    message: string,
} 

type UserI = RegisterDataUserI | FullDataUserI;

export interface AuthStateI {
    loading: boolean,
    user: UserI,
    isAuth: boolean,
    isAdmin: boolean,
    linkVerification: string,
    isSendCodeEditProfile: boolean,
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
    payload: PayloadFullDataUser,
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
    payload: PayloadFullDataUser,
}

interface RequestLoginFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_FAILURE,
    payload: null | string,
}

export type LoginActionTypes = StartedRequestLogin | RequestLoginSuccess | RequestLoginFailure;

interface StartedRequestSendMessageMailCode {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE,
    payload: boolean,
}

interface RequestSendMessageMailCodeSuccess {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_SUCCESS,
    payload: boolean,
}

interface RequestSendMEssageMailCodeFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_FAILURE,
    payload: null | string;
}

export type SendMessageMailCodeEditProfileActionType = StartedRequestSendMessageMailCode | RequestSendMessageMailCodeSuccess | RequestSendMEssageMailCodeFailure;

interface StartedRequestEditProfile {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_EDIT_PROFILE,
    payload: boolean,
}

interface RequestEditProfileSuccess {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_EDIT_PROFILE_SUCCESS,
    payload: object,
}

interface RequestEditProfileFailure {
    type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_EDIT_PROFILE_FAILURE,
    payload: null | string,
}

export type EditProfileActionType = StartedRequestEditProfile | RequestEditProfileSuccess | RequestEditProfileFailure;

export type AuthActionTypes = StartedRequestRegister | RequestRegisterSuccess | RequestRegisterFailure 
                            | StartedRequestVerification | RequestVerificationSuccess | RequestVerificationFailure
                            | StartedRequestLogin | RequestLoginSuccess | RequestLoginFailure 
                            | StartedRequestSendMessageMailCode | RequestSendMessageMailCodeSuccess | RequestSendMEssageMailCodeFailure
                            | StartedRequestEditProfile | RequestEditProfileSuccess | RequestEditProfileFailure;