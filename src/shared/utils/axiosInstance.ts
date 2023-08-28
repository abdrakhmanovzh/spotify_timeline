import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1"
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token");

    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
