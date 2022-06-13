import { fromJS } from 'immutable';

import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS
} from './constants';


const initialState = fromJS({
    errors: null,
    loading: false
});


function loginReducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return state.set('errors', null, 'loading', true);
    case LOGIN_SUCCESS:
        return state.set('loading', false);
    case LOGIN_ERROR:
        return state.set('errors', action.data.detail, 'loading', false);
    default:
      return state;
    }
}


export default loginReducer;