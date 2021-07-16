import {ADDRESS_MODIFY_FAIL, LOAD_ADDRESSES, MODIFIED_ADDRESS, LOAD_ADDRESSES_FAIL, LOADED_ADDRESSES} from '../actions/types';

const initialState = {
    isLoading: false,
    addresses: []
  };

export default function(state = initialState, action){
    debugger;
    switch(action.type){
        case ADDRESS_MODIFY_FAIL:
            return {
            ...state,
            loading: false
            };
        case LOADED_ADDRESSES:
            return {
            ...state,
            addresses: action.payload,
            loading: true
            };
        case MODIFIED_ADDRESS:
        case LOAD_ADDRESSES:
        case LOAD_ADDRESSES_FAIL:
            return {
            ...state
            };
        default:
            return state;
    }
}