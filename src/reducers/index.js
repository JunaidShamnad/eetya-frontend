import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import auth from './auth'



export const reducers = combineReducers({ itemReducer, errorReducer, cartReducer, orderReducer, auth });