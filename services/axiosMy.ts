import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_URL_MY_API;

const axiosMy = axios.create({
  baseURL: baseURL,
});

axiosMy.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle errors
    throw error;
  },
);

export default axiosMy;
