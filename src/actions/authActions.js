import axios from 'axios';
import axiosConfig from "../_services/axiosConfig";
import { returnErrors } from './errorActions';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REFRESH_TOKEN
} from './types';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
  debugger;

  axiosConfig
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const signup = (SignupDetails) => (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify( SignupDetails );
  debugger;
  axiosConfig
    .post('api/auth/signup/', body, config)
    .then(res =>{
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
      alert("Registered Successfully!");
    }
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({usernameOrEmail, password}) => (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ usernameOrEmail, password });
  debugger;

  return axiosConfig
    .post('/api/auth/signin/', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      return new Promise((receive,reject) => {receive(res.data)});
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
      return new Promise((receive,reject) => {reject(err.response.data)});
    });
};

// Logout User
export const logout = () => (dispatch) => {
  dispatch(
    {type: LOGOUT_SUCCESS}
  );
};

export const refershToken = () => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  axiosConfig
    .post('/api/auth/refreshToken/', {}, config)
    .then(res =>{
      if(res.data== null || res.data=="" || res.data.length ==0){
        dispatch(
          returnErrors(res.data, "NO_DATA", 'LOGIN_FAIL')
        );
      }
      else{
        debugger;
        dispatch({
          type: REFRESH_TOKEN,
          payload: res.data
        });
      }
      
    }
      
    )
    .catch(err => {
      debugger;
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      // dispatch({
      //   type: LOGIN_FAIL
      // });
    });
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  debugger;
  console.log(getState);
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['Authorization'] = "Bearer " + token;
  }

  return config;
};