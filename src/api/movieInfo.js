import axios from '@/utils/axios.js';

export const getMovieInfo = (props) => {
  console.log('props:', props)
    return axios({
    url: `/api/movies/:id`,
    method: 'get',
    ...props,
  });
}