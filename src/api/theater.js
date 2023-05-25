import axios from '@/utils/axios.js';

export const getTheaters = (props) => {
  return axios({
    url: `/theaters`,
    method: 'get',
    ...props,
  });
};

export const getTheater = (theaterName, props) => {
  return axios({
    url: `/theaters/${theaterName}`,
    method: 'get',
    ...props,
  });
};
