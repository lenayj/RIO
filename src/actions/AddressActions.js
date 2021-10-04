import axios from 'axios';
import axiosConfig from "../_services/axiosConfig";
import {ADDRESS_MODIFY_FAIL, LOAD_ADDRESSES, MODIFIED_ADDRESS, LOAD_ADDRESSES_FAIL, LOADED_ADDRESSES, ADD_NEW_ADDRESS} from './types'
import { tokenConfig } from './authActions';
import jwt_decode from 'jwt-decode';
import { returnErrors } from './errorActions';
import PropTypes from 'prop-types';
import history from '../components/history';

export const viewAllAddresses = (params) => (dispatch, getState) => {
    dispatch(setItemsLoading());
    // console.log(jwt_decode(getState().auth.token));
    var response;
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
            .get('/viewAllAddresses',{
                ...tokenConfig(getState)
            })
            .then(res =>{
                debugger;
                dispatch({
                    type: LOADED_ADDRESSES,
                    payload: res.data
                });
                return new Promise((receive,reject) => {receive(res.data)});
            }
        )
        .catch(err => {
            debugger;
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOAD_ADDRESSES_FAIL')
            );
            dispatch({
                type: LOAD_ADDRESSES_FAIL
            });
        });
    }
    catch(err){
        history.push("/login");   
    }
}

export const addNewAddress = (params,props) => (dispatch,getState) => {
    dispatch(setItemsLoading());
    var response = null;
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
        .post('/addNewAddress/', params, {
            ...tokenConfig(getState)
        })
        .then(res =>{
            response = res.data;
            dispatch({
                type: ADD_NEW_ADDRESS,
                payload: res.data
            });
            alert(res.data);
            props.history.push("/myInfo");
            return new Promise((res,reject) => {res(response)});
        }
        )
        .catch(err => {
            debugger;
        dispatch(
            returnErrors(err?.response?.data, err?.response?.status, 'ADDRESS_MODIFY_FAIL')
        );
        dispatch({
            type: ADDRESS_MODIFY_FAIL
        });
        history.push("/login");        
        });
    }
    catch(err){
        history.push("/login");
        return new Promise((resf,errf)=>{errf(err)});   
    }

}

export const modifyAddress = (params,id,props) => (dispatch,getState) => {
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
        .post('/modifyAddress/' + id, params, {
            ...tokenConfig(getState)
        })
        .then(res =>{
            dispatch({
                type: MODIFIED_ADDRESS,
                payload: res.data
            });
            alert(res.data);
            props.history.push("/myInfo");
            return new Promise((resf,errf)=>{resf(res.data)});
        }
        )
        .catch(err => {
            debugger;
        dispatch(
            returnErrors(err?.response.data, err?.response?.status, 'ADDRESS_MODIFY_FAIL')
        );
        dispatch({
            type: ADDRESS_MODIFY_FAIL
        });
        history.push("/login");        
        });
    }
    catch(err){
        history.push("/login");   
        return new Promise((resf,errf)=>{errf(err)});
    }

}

export const setItemsLoading = () => {
    return {
        type: LOAD_ADDRESSES
    }
}