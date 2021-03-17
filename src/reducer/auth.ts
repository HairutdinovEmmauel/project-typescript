import { ACTION_TYPES } from '../constants';
import { AuthStateI, AuthActionTypes, UserI } from '../types/reducers/auth';

const initialState: AuthStateI = {
    loading: false,
    user: {},
    isAuth: false, 
    isAdmin: false,
    linkVerification: 'http://localhost:3000/verification/email:',
    error: null,
} 

const addDataRegisteredUser = (dataUser: UserI): UserI => {

    return {
        ...dataUser,
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
                user: addDataRegisteredUser(action.payload.user),
                linkVerification: action.payload.linkVerification,
            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE: 
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

            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_FAILURE: 
            return {
                ...state,

            }
        default: 
            return {
                ...state,
            }
    }
}   

export default authReducer;