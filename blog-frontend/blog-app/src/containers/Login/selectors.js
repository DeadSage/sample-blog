import { createSelector } from 'reselect';


const selectLogin = state => {
  return state.login
};


const makeSelectLoading = () => {
  return createSelector(selectLogin, routeState => routeState.get('loading'));
}


const makeSelectErrors = () => {
  return createSelector(selectLogin, routeState => routeState.get('errors'));
}


export {
    makeSelectLoading,
    makeSelectErrors
};