import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from './constants';


export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data
});


export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});


export const loginError = data => ({
  type: LOGIN_ERROR,
  data,
});
