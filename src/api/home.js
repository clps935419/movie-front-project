import axios from "@/utils/axios.js";

export const getHome = (props) => {
  return axios({
    url: `/home`,
    method: "GET",
    ...props,
  });
};
