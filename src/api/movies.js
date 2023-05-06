import axios from "@/utils/axios.js";

export const getMovies = (props) => {
  return axios({
    url: `/movies`,
    method: "GET",
    ...props,
  });
};
