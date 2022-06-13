import { get, postFormData } from '../../api/utils';


export const getPostsListApi = () =>
    get('api/v1/posts/', true);


export const createPostsLApi = (data) =>
    postFormData('api/v1/posts/create/', true, data);
