import axios from 'axios';
import axiosConfig from "../_services/axiosConfig";
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, CREATE_PICKUP, CREATED_PICKUP, PICKUP_FAIL} from './types'
import { tokenConfig } from './authActions';
import jwt_decode from 'jwt-decode';
import { returnErrors } from './errorActions';
import history from '../components/history';


export const putPickups = (params) => (dispatch,getState) => {
    dispatch(setItemsLoading());
    // console.log(jwt_decode(getState().auth.token));
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      // Request body
      const body = JSON.stringify(params);
      debugger;
    try{
        // var token = jwt_decode(getState().auth.token,{header: true});
        return axiosConfig
        .post('/pickup', params, {
            ...tokenConfig(getState)
        })
        .then(res =>{
            dispatch({
                type: CREATED_PICKUP,
                payload: res.data
            });
            alert(res.data);
            return new Promise((resf,errf)=>{resf(res.data)});
        }
        )
        .catch(err => {
            debugger;
        dispatch(
            returnErrors(err.response.data, err.response.status, 'PICKUP_FAIL')
        );
        dispatch({
            type: PICKUP_FAIL
        });
        
        //history.push("/login");        
        });
         
    }
    catch(err){
        history.push("/login");  
        return new Promise((resf,errf)=>{errf(err)});
    }

}

export const setItemsLoading = () => {
    return {
        type: CREATE_PICKUP
    }
}