import {CREATE_PICKUP, LOAD_USER_INFO, USER_LOADING} from '../actions/types'

const initialState = {
    isLoading: false,
    user: null
  };

export default function(state = initialState, action){
    debugger;
    switch(action.type){
        case LOAD_USER_INFO:
            return {
            ...state,
            user: action.payload,
            loading: false
            };
        case USER_LOADING:
            return {
            ...state,
            loading: true
            };
        case CREATE_PICKUP:
            return {
            ...state,
            loading: true
            };
        default:
            return state;
    }
}