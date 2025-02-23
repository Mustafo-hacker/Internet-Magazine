import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://store-api.softclub.tj", 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
  const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
   return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
  return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";  
    }
    return Promise.reject(error);
  }
);
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("access_token", token);
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
    localStorage.removeItem("access_token");
  }
};
export const saveToken = (token) => {
  localStorage.setItem("access_token", token);
  setAuthToken(token);
};

export default axiosInstance;
