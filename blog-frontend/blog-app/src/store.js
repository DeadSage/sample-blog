import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import globalSaga from './containers/App/saga'
import postReducer from './containers/Post/reducer'
import loginReducer from './containers/Login/reducer'


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
    reducer: {
        login: loginReducer,
        post: postReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(globalSaga)

export default store
