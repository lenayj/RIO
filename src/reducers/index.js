import { combineReducers } from 'redux';
import itemReducer from './itemReducers';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import AddressReducer from './AddressReducer';
import InvoiceReducer from './InvoiceReducer';


export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    user: userReducer,
    address:AddressReducer,
    invoice:InvoiceReducer
})