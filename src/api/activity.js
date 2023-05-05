import axios from "@/utils/axios.js";

export const getActivity = (props) => {
  return axios({
    url: `/activity`,
    method: "GET",
    ...props,
  });
};