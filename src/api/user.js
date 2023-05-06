import axios from '@/utils/axios.js';

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

export const getProfile = (email, props) => {
  return axios({
    url: `/user/profile/${email}`,
    method: 'get',
    ...props,
  });
};

export const patchProfile = (props) => {
  return axios({
    url: `/user/profile`,
    method: 'patch',
    ...props,
  });
};

export const updatePassword = (props) => {
  return axios({
    url: `/user/password`,
    method: 'post',
    ...props,
  });
};
