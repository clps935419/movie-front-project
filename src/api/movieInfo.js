import axios from '@/utils/axios.js';

export const getMovieInfo = (props) => {
  return axios({
    url: `/api/movies`,
    method: 'get',
    ...props,
  });
}