import {GET_INVOICES, INVOICES_LOADING} from '../actions/types'

const initialState = {
    invoice: [
    ],
    loading: false
}

export default function(state = initialState, action){
    debugger;
    switch(action.type){
        case GET_INVOICES:
            return {
            ...state,
            invoice: action.payload,
            loading: false
            };
        case INVOICES_LOADING:
            return {
            ...state,
            loading: true
            };
        default:
            return state;
    }
}