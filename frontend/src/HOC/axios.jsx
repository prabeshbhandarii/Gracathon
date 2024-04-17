import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: 'https://testtingtwo.hubit.com.np'
});

instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: localStorage.getItem("token")
        ? `${localStorage.getItem("token")}`
        : "",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
