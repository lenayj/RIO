import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types'
import { tokenConfig } from './authActions';
import jwt_decode from 'jwt-decode';

export const getItems = () => (dispatch,getState) => {
    dispatch(setItemsLoading());
    debugger;
    console.log(jwt_decode(getState().auth.token));
    axios
    .get('api/user/view_prescriptions',{
        params : {
            email: jwt_decode(getState().auth.token).email
        },
        ...tokenConfig(getState)
    }).then(res => 
        dispatch({
            type: GET_ITEMS,
            payload:res.data
        }))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}