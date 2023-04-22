import axios from "@/utils/axios.js";

export const getAuth = (props) => {
  return axios({
    url: `/auth`,
    method: "GET",
    ...props,
  });
};
