import axios from 'axios';
import { AxiosInterceptor } from '../interceptors/axios.interceptor';

export const callApi = async ({ endpoint, method = 'get', data }) => {
  AxiosInterceptor();
  const abortController = new AbortController();
  const signal = abortController.signal;

  let response;

  try {
    response = await axios({ url: endpoint, method, data, signal, timeout: 10000 });
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new Error('Request canceled');
    } else {
      throw await error;
    }
  } finally {
    abortController.abort();
  }

  return { data: response };
};
