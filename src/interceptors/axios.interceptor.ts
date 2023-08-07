import axios, { AxiosRequestConfig } from 'axios';
import { getValidationError } from '../helpers/get-validation-error';
import { SnackbarUtilities } from '../helpers/snackbar-manager';

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const newHeaders = {
      'Content-Type': 'application/json',
    };

    if (request.method === 'get') request.params = request.data;
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    response => {
      return response.data || response;
    },
    error => {
      const errorCode = error.response?.data?.error || error.code;
      if (errorCode) {
        const newErrors = getValidationError(errorCode);
        if (newErrors) SnackbarUtilities.error(newErrors);
      }

      throw error.response?.data || error;
    }
  );
};
