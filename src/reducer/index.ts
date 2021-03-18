import { combineReducers } from 'redux';

// Reducers
import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer
});

export type RootStateType = ReturnType<typeof rootReducer>; 

export default rootReducer;