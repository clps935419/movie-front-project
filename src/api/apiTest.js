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
    url: `/user/singin`,
    method: 'post',
    ...props,
  });
};

export const postSingup = (props) => {
  return axios({
    url: `/user/singup`,
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
