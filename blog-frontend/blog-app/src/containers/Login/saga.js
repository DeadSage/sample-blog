import { call, put, takeLatest } from 'redux-saga/effects';
import {LOGIN_REQUEST} from './constants'
import {loginSuccess, loginError, loginRequest} from './actions'

import { loginApi } from './paths'


export function* login(action) {
  const { data, handleSuccess } = action.data
  yield call(loginRequest)
  try {
    const response = yield call(loginApi, data);
    yield call(loginSuccess);
    yield call(handleSuccess);
    localStorage.setItem('auth_token', response.data.access);
  } catch (errors) {
    yield put(loginError(errors.data));
  }
}


const loginSaga = [
  takeLatest(LOGIN_REQUEST, login),
]


export default loginSaga
