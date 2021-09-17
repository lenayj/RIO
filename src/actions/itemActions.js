import axios from 'axios';
import axiosConfig from "../_services/axiosConfig";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types'
import { tokenConfig } from './authActions';
import { useHistory } from "react-router-dom";

export const getItems = () => (dispatch,getState) => {
    dispatch(setItemsLoading());
    // console.log(jwt_decode(getState().auth.token));
    try{
        axiosConfig
        .get('api/user/view_prescriptions',{...tokenConfig(getState)})
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload:res.data
        }))
    }
    catch(err){
    }
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}