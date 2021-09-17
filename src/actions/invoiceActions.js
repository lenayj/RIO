import axios from 'axios';
import axiosConfig from "../_services/axiosConfig";
import {GET_INVOICES, INVOICES_LOADING} from './types'
import { tokenConfig } from './authActions';
import { useHistory } from "react-router-dom";

export const getInvoices = () => (dispatch,getState) => {
    dispatch(setInvoicesLoading());
    // console.log(jwt_decode(getState().auth.token));
    try{
        axiosConfig
        .get('/invoices',{...tokenConfig(getState)})
        .then(res => 
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