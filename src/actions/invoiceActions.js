import axios from 'axios';
import {GET_INVOICES, INVOICES_LOADING} from './types'
import { tokenConfig } from './authActions';
<<<<<<< HEAD
import jwt_decode from 'jwt-decode';
=======
>>>>>>> topic/rev/feature/integration_handle_sessions_management_life_cycle
import { useHistory } from "react-router-dom";

export const getInvoices = () => (dispatch,getState) => {
    dispatch(setInvoicesLoading());
    // console.log(jwt_decode(getState().auth.token));
    try{
<<<<<<< HEAD
        var token = jwt_decode(getState().auth.token,{header: true});
        axios
        .get('/invoices',{
            params : {
                email: token.email
            },
            ...tokenConfig(getState)
        }).then(res => 
=======
        axios
        .get('/invoices',{...tokenConfig(getState)})
        .then(res => 
>>>>>>> topic/rev/feature/integration_handle_sessions_management_life_cycle
            dispatch({
                type: GET_INVOICES,
                payload:res.data
        }))
    }
    catch(err){
    }
}

export const setInvoicesLoading = () => {
    return {
        type: INVOICES_LOADING
    }
}