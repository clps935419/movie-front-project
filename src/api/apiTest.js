import axios from "axios";

export const getAuth = (props) => {
  return axios({
    url: `/api/auth`,
    method: "GET",
    ...props,
  });
};
