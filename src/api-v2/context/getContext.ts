import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// request type
export interface Request {}

// response type
export interface Response {
  id: string;
  name: string;
  created_at: string;
}

/**
 * Axios Request
 * @constant {AxiosRequestConfig}
 */
export const axiosRequest: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://circleci.com/api/v2/context/%7Bcontext-id%7D',
  headers: {
    authorization: 'Basic REPLACE_BASIC_AUTH'
  }
};

/**
 * Axios Response
 * @constant {AxiosResponse}
 */
// export const axiosResponse: AxiosResponse = {
//   data as Response,
// };
