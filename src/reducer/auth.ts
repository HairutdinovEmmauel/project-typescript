import { ACTION_TYPES, INITIAL_STATE } from '../constants';
import { AuthStateI, AuthActionTypes, FullDataUserI, RegisterDataUserI, PayloadFullDataUser, PayloadUserRegisterI} from '../types/reducers/auth';

const initialState: AuthStateI = {
    loading: false,
    user: INITIAL_STATE.initialAuthStateUser,
    isAuth: false, 
    isAdmin: false,
    linkVerification: 'http://localhost:3000/verification/email:',
    isSendCodeEditProfile: false,
    error: null,
} 

function addDataUser(dataUser: PayloadFullDataUser): FullDataUserI {

    if(dataUser.token) {
        localStorage.setItem('token', dataUser.token);
    }

    return {
        ...dataUser.user,
    }
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthStateI => {
    switch(action.type) {
        case ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER:
            return {
                ...state,
                loading: action.payload,   
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_SUCCESS: 
            return {
                ...state,
                user: action.payload.user,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_VERIFICATION:
            return {
                ...state,
                loading: action.payload,   
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_SUCCESS: 
            return {
                ...state,
                user: addDataUser(action.payload),
                isAuth: true,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_LOGIN: 
            return {
                ...state,
                loading: action.payload,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_SUCCESS: 
            return {
                ...state,
                user: addDataUser(action.payload),
                isAuth: true,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE: 
            return {
                ...state,
                loading: action.payload,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_SUCCESS: 
            return {
                ...state,
                isSendCodeEditProfile: action.payload,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        default: 
            return {
                ...state,
            }
    }
}   

export default authReducer;