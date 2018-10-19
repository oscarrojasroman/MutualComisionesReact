import axios from 'axios';


const API_ROOT = 'https://localhost:5000/api';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    axios.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    axios.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    axios.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    axios.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/account'),
  login: (email, password) =>
    requests.post('/account/login', { user: { email, password } })
};


export default {
  Auth,
  setToken: _token => { token = _token; }
};
