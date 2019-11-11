import axios from 'axios';

const api = axios.create({
  baseURL: 'https://opentdb.com'
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // const { data, status } = error.response;
    // TODO: do something when the request fails (e.g. show a notice)
    return Promise.reject(error);
  }
);

export default api;
