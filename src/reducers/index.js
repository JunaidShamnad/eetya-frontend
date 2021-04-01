import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    cart: cartReducer,
    order: orderReducer
})