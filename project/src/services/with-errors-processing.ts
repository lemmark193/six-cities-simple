import {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {handleError} from './handle-error';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const withErrorsProcessing = (api: AxiosInstance): AxiosInstance => {
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
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
