import axios from 'axios';

// Typing
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from '../reducer';
import { 
    RegisterActionTypes,
    VerificationActionTypes,
    LoginActionTypes, 
    SendMessageMailCodeEditProfileActionType,
    EditProfileActionType,
} from '../types/reducers/auth';
import { FormLoginI, FormProfileI, FormRegisterI, FormVerificationI } from '../types/constants/initial-local-state';

// Constants
import { ACTION_TYPES } from '../constants';

export const requestRegister = (formRegister: FormRegisterI): ThunkAction<Promise<void>, RootStateType, unknown, RegisterActionTypes> => {
    return async (dispatch, getState) => {

        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER,
            payload: true,
        })

        try {
            const res = await axios.post('http://localhost:4000/api/auth/register', { ...formRegister, linkVerification: `${getState().auth.linkVerification}${formRegister.email}` });

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_SUCCESS,
                payload: res.data,
            })

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE,
                payload: null,
            })
        } catch (error) {

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_REGISTER_FAILURE,
                payload: error.response.data.message,
            })
        } finally {

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER,
                payload: false,
            })
        }
    }
}

export const requestVerification = (formVerification: FormVerificationI): ThunkAction<Promise<void>, RootStateType, unknown, VerificationActionTypes> => {
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_VERIFICATION,
            payload: true,
        })

        try {
            const res = await axios.post('http://localhost:4000/api/auth/verification', { ...formVerification, verificationCode: +formVerification.verificationCode });

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_SUCCESS,
                payload: res.data,
            })

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_FAILURE,
                payload: null,
            })
        } catch (error) {

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_VERIFICATION_FAILURE,
                payload: error.response.data.message,
            })
        } finally {
            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_VERIFICATION,
                payload: false,
            })
        }
    }
}

export const requestLogin = (formLogin: FormLoginI): ThunkAction<Promise<void>, RootStateType, unknown, LoginActionTypes> => { 
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_LOGIN,
            payload: true,
        })

        try {

            const res = await axios.post('http://localhost:4000/api/auth/login', { ...formLogin });

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_SUCCESS,
                payload: res.data,
            })

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_FAILURE,
                payload: null,
            })
        } catch (error) {

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_LOGIN_FAILURE,
                payload: error.response.data.message,
            })
        } finally {
            
            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_LOGIN,
                payload: false,
            })
        }

    }
}

export const requestSendMessageMailCode = (): ThunkAction<Promise<void>, RootStateType, unknown, SendMessageMailCodeEditProfileActionType> => {
    return async (dispatch) => {
        
        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE,
            payload: true,
        })

        try {

            const res = await axios({
                method: 'post',
                url: 'http://localhost:4000/api/auth/send-message-mail-code-form-edit-profile',
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            });

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_SUCCESS,
                payload: res.data.isSendCodeEditProfile,
            })

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_FAILURE,
                payload: null,
            })

        } catch (error) {
            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE_FAILURE,
                payload: error.response.data.message,
            })
        } finally {
            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_SEND_MESSAGE_CODE_EDIT_PROFILE,
                payload: false, 
            })
        }
    }
}   

export const requestEditedProfile = (formProfile: FormProfileI): ThunkAction<Promise<void>, RootStateType, unknown, EditProfileActionType> => {
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_EDIT_PROFILE,
            payload: true,
        })

        try {

            const res = await axios({
                method: 'put',
                url: 'http://localhost:4000/api/auth/edit-profile',
                data: {
                    ...formProfile,
                },
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            })

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_EDIT_PROFILE_SUCCESS,
                payload: res.data.user,
            })

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_EDIT_PROFILE_FAILURE,
                payload: null,
            })

        } catch (error) {

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.REQUEST_EDIT_PROFILE_FAILURE,
                payload: error.response.data.message,
            })
        } finally {

            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_EDIT_PROFILE,
                payload: false,
            })
        }
    }
}
