import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { setClearMaskArr, setMaskArr } from "../store/slice/maskSlice";

let store = {};
export const injectStore = (_store) => {
  store = _store;
};

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";
const PRODUCT_URL = process.env.REACT_APP_PRODUCT_URL;
const BASE_URL =
  isDev || isTest
    ? "/api/"
    : `${PRODUCT_URL}api`;
const SYSTEM_NAME = process.env.REACT_APP_NAME || "test";

export default async (propsConfig) => {
  const { customBaseUrl = "", url = "" } = propsConfig;
  const loadingId = uuidv4();
  const instance = axios.create({
    baseURL: customBaseUrl === "" ? BASE_URL : customBaseUrl,
    headers: { common: {} },
  });
  const { dispatch = () => {} } = store;

  instance.defaults.headers["Content-Type"] = "application/json";
  instance.interceptors.request.use(
    (config) => {
      const { withToken = true, withLoading = true } = config;
      if (withToken) {
        const token = Cookies.get(`${SYSTEM_NAME}_token`);
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
      }
      if (withLoading) {
        dispatch(
          setMaskArr({
            id: loadingId,
            url: customBaseUrl === "" ? BASE_URL : customBaseUrl,
          })
        );
      }
      return config;
    },
    (error) => {
      dispatch(setClearMaskArr(loadingId));
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      dispatch(setClearMaskArr(loadingId));
      return response;
    },
    (e) => {
      dispatch(setClearMaskArr(loadingId));
      return Promise.reject(e);
    }
  );

  return instance(propsConfig);
};
