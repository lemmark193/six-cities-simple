import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token';
import {handleError} from './handle-error';
import {StatusCodes} from 'http-status-codes';

const BASE_URL = 'https://12.react.pages.academy/six-cities-simple';

const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      // eslint-disable-next-line
      console.log(error);

      if (error.response && shouldDisplayError(error.response)) {
        handleError(error.response.data.error);
      } else if (error.code === 'ERR_NETWORK') {
        handleError(error.message);
      }

      throw error;
    }
  );


  return api;
};
