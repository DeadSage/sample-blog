import {
    GET_LIST_POSTS_REQUEST,
    GET_LIST_POSTS_SUCCESS,
    GET_LIST_POSTS_ERROR,
    OPEN_MODAL,
    CLOSE_MODAL,
    CREATE_POST_REQUEST
} from './constants';


export const getPostsRequest = data => ({
    type: GET_LIST_POSTS_REQUEST,
    data,
});


export const getPostsSuccess = data => ({
    type: GET_LIST_POSTS_SUCCESS,
    data,
});


export const getPostsError = () => ({
    type: GET_LIST_POSTS_ERROR,
});


export const setOpenModal = () => ({
    type: OPEN_MODAL,
})


export const setCloseModal = () => ({
      type: CLOSE_MODAL,
})

export const createPostsRequest = data => ({
    type: CREATE_POST_REQUEST,
    data,
});
