import { post } from '../../api/utils';

export const loginApi = (data) =>
  post(`api/v1/login/`,  false, data);
