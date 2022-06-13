import { all } from 'redux-saga/effects';
import loginSaga from '../Login/saga'
import postSaga from '../Post/saga'


export default function* rootSaga() {
    yield all([
        ...loginSaga,
        ...postSaga,
    ])
}
