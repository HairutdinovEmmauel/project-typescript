import axios from 'axios';

// Typing
import { ThunkAction } from 'redux-thunk';
import { RootStateType } from '../reducer';
import { LoginActionTypes, RegisterActionTypes } from '../types/reducers/auth';
import { FormRegisterI } from '../types/constants/initial-local-state';

// Constants
import { ACTION_TYPES } from '../constants';

export const requestRegister = (formRegister: FormRegisterI): ThunkAction<Promise<void>, RootStateType, unknown, RegisterActionTypes> => {
    return async (dispatch) => {

        console.log(formRegister);

        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_REGISTER,
            payload: true,
        })

        try {
            const res = await axios.post('http://localhost:4000/api/auth/register', { ...formRegister });

            console.log( res.data );

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

export const requestLogin = (): ThunkAction<Promise<void>, RootStateType, unknown, LoginActionTypes> => { 
    return async (dispatch) => {

        dispatch({
            type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_LOGIN,
            payload: true,
        })

        try {

            const res = await axios.post('/');

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
                payload: error.res.data.message,
            })
        } finally {
            
            dispatch({
                type: ACTION_TYPES.AUTH_ACTION_TYPES.STARTED_REQUEST_LOGIN,
                payload: false,
            })
        }

    }
}
