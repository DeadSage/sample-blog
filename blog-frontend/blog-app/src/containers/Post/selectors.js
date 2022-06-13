import { createSelector } from 'reselect';


const selectPost = state => {
  return state.post
};


const makeSelectPostsList = () => {
    return createSelector(selectPost, routeState => routeState.get('PostsList'));
}


const makeSelectLoading = () => {
    return createSelector(selectPost, routeState => routeState.get('loading'));
}


const makeSelectIsOpenModal = () => {
    return createSelector(selectPost, routeState => routeState.get('isOpenModal'));
}



export {
    makeSelectPostsList,
    makeSelectLoading,
    makeSelectIsOpenModal
};
