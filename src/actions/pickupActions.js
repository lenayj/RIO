import axios from 'axios';
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
        axios
        .post('/pickup', body, {
            ...tokenConfig(getState)
        })
        .then(res =>
        dispatch({
            type: CREATED_PICKUP,
            payload: res.data
        })
        )
        .catch(err => {
            debugger;
        dispatch(
            returnErrors(err.response.data, err.response.status, 'PICKUP_FAIL')
        );
        dispatch({
            type: PICKUP_FAIL
        });
        history.push("/login");        
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