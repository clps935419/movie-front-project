import axios from '@/utils/axios.js';

export const getMovieInfo = (props) => {
  return axios({
    url: `/movies`,
    method: 'get',
    ...props,
  });
}