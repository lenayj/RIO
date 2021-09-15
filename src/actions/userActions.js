import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, CREATE_PICKUP, LOAD_USER_INFO, LOADED_FAIL_USER_INFO, PICKUP_FAIL} from './types'
import { tokenConfig } from './authActions';
import jwt_decode from 'jwt-decode';
import { returnErrors } from './errorActions';
import history from '../components/history';


export const myInformation = () => (dispatch,getState) => {
    dispatch(setItemsLoading());
    // console.log(jwt_decode(getState().auth.token));
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      debugger;
    try{
        // var token = jwt_decode(getState().auth.token,{header: true});
        return axios
        .get('/myInformation',{
            ...tokenConfig(getState)
        })
        .then(res =>{
            console.log(res);
            debugger;
        dispatch({
            type: LOAD_USER_INFO,
            payload: res.data
        })
        return new Promise((receive,reject) => {receive(res.data)});
    }
        )
        .catch(err => {
            debugger;
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOADED_FAIL_USER_INFO')
            );
            dispatch({
                type: LOADED_FAIL_USER_INFO
            });
            
        });
    }
    catch(err){
        history.push("/login");   
    }

}

export const setItemsLoading = () => {
    return {
        type: CREATE_PICKUP
    }
}