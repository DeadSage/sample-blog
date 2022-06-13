import { fromJS } from 'immutable';

import {
    GET_LIST_POSTS_REQUEST,
    GET_LIST_POSTS_SUCCESS,
    GET_LIST_POSTS_ERROR,
    OPEN_MODAL,
    CLOSE_MODAL,
} from './constants';


const initialState = fromJS({
    postsList: [],
    loading: false,
    isOpenModal: false
});


function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_POSTS_SUCCESS:
            return state.set('postsList', action.data).set('loading', false);
        case GET_LIST_POSTS_REQUEST:
            return state.set('loading', true);
        case GET_LIST_POSTS_ERROR:
            return state.set('loading', false);
        case OPEN_MODAL:
            return state.set('isOpenModal', true);
        case CLOSE_MODAL:
            return state.set('isOpenModal', false);
        default:
            return state;
    }
}


export default postReducer;
