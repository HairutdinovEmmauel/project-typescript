import { ACTION_TYPES } from '../constants';
import { AuthStateI, AuthActionTypes } from '../types/auth';

const initialState: AuthStateI = {
    loading: false,
    isAuth: false, 
    isAdmin: false,
    error: null,
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

            }
        case ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE: 
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