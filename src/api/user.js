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
    url: `/user/password/forget`,
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

export const getPurchaseRecord = (props) => {
  return axios({
    url: `/user/purchaseRecord`,
    method: 'get',
    ...props,
  });
};

export const getBonusRecord = (props) => {
  return axios({
    url: `/user/bonusRecord`,
    method: 'get',
    ...props,
  });
};
