import axios from 'axios';
// import { stringify, parse } from 'qs';
//
// export const makeQueryParams = params =>
//   stringify(params, { arrayFormat: 'repeat', encode: false });
//
// export const parseQueryString = queryString => parse(queryString);
//

export const axiosInstance = (needAuth=false) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const authToken = needAuth ? localStorage.getItem('auth_token') : null;

  const params = {
    baseURL: `${API_URL}`,
    timeout: 180000,
    headers: {
      Authorization: `JWT ${authToken}`,
      'client-server': 'true',
    },
  };
  return axios.create(params);
};

export const get = (path, needAuth= false, params = null) => {
  const instance = axiosInstance(needAuth);
  return new Promise((resolve, reject) => {
    instance
      .get(path)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        if (error.response.status === 401) {
            localStorage.clear();
            window.history.go('/login')
            return
        } else {
            console.log(error.response);
        }
        reject(error.response);
      });
  });
};

export const post = (path, needAuth = false, data) => {
  const instance = axiosInstance(needAuth);
  return new Promise((resolve, reject) => {
    instance
      .post(path, data)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        if (error.response.status === 401) {
            localStorage.clear();
            window.history.go('/login')
            return
        } else {
            console.log(error.response);
        }
        reject(error.response);
      });
  });
};

export const postFormData = (path, needAuth = false, data) => {
  const instance = axiosInstance(needAuth);
  const formData = convertDataToFormData(data);

  return new Promise((resolve, reject) => {
    instance
      .post(path, formData)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
        if (error.response.status === 401) {
            localStorage.clear();
            window.history.go('/login')
            return
        } else {
            console.log(error.response);
        }

      });
  });
};

const convertDataToFormData = data => {
  const formData = new FormData();

  Object.keys(data).forEach(key => {
    if (data[key] instanceof Blob) {
      formData.append(key, data[key], data[key].name);
    } else if (typeof data[key] === 'object') {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, data[key]);
    }
  });

  return formData;
};
