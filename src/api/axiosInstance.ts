import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
const logError = (error: AxiosError) => {
  if (error.response) {
    console.error(
      `Backend returned code ${error.response.status}, body was:`,
      error.response.data,
    );
  } else if (error.request) {
    console.error('No response received:', error.request);
  } else {
    console.error('Error:', error.message);
  }
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:3010/api',
});

axiosInstance.interceptors.request.use(
  //@ts-ignore
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    logError(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    logError(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
