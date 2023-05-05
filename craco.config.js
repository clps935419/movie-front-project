const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const getClientEnvironment = require("react-scripts/config/env");
const ENV_VAR = getClientEnvironment().raw;

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      // console.log("env", env.REACT_APP_TES);
      webpackConfig.devtool = "source-map";
      return webpackConfig;
    },
  },
  devServer: {
    compress: true,
    proxy: {
      "/api": {
        target: `${ENV_VAR.REACT_APP_PROXY_DEV_URL}`,
      },
      "/connect": {
        target: `${ENV_VAR.REACT_APP_PROXY_DEV_URL}/websocket/${ENV_VAR.REACT_APP_NAME}`,
        ws: true,
      },
    },
  },
};
