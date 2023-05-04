import axios from '@/utils/axios.js';

export const getAuth = (props) => {
  return axios({
    url: `/auth`,
    method: 'GET',
    ...props,
  });
};

export const postLogin = (props) => {
  return axios({
    url: `/user/login`,
    method: 'post',
    ...props,
  });
};

export const postSignup = (props) => {
  return axios({
    url: `/user/signup`,
    method: 'post',
    ...props,
  });
};

export const postRecoverPassword = (props) => {
  return axios({
    url: `/user/recoverPassword`,
    method: 'post',
    ...props,
  });
};

export const postRecoverPassword = (props) => {
  return axios({
    url: `/user/recoverPassword`,
    method: 'post',
    ...props,
  });
};
