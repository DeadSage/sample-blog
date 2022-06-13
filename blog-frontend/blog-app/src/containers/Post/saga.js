import { call, put, takeLatest } from 'redux-saga/effects';

import {GET_LIST_POSTS_REQUEST, CREATE_POST_REQUEST} from './constants'
import {getPostsSuccess, getPostsError} from './actions'
import {getPostsListApi, createPostsLApi} from './paths'


export function* getPostsList(action) {
  try {
    const response = yield call(getPostsListApi);
    yield put(getPostsSuccess(response.data));
  } catch {
    yield call(getPostsError);
  }
}


export function* createPost(action) {
  const { data, handleSuccess, handleErrors } = action.data
  try {
    yield call(createPostsLApi, data);
    yield call(handleSuccess);
  } catch {
    yield call(getPostsError);
    yield call(handleErrors);
  }
}


const postSaga = [
  takeLatest(GET_LIST_POSTS_REQUEST, getPostsList),
  takeLatest(CREATE_POST_REQUEST, createPost),
]


export default postSaga
