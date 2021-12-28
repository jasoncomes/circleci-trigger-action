import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// params type
export interface Params {
  'owner-id': string;
  'page-token': string;
}

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
  url: 'https://circleci.com/api/v2/context',
  qs: {
    'owner-id': 'c65b68ef-e73b-4bf2-be9a-7a322a9df150',
    'page-token': 'next_page_token',
  } as Params,
  headers: { 
    authorization: 'Basic REPLACE_BASIC_AUTH' 
  },
};

/**
 * Axios Response
 * @constant {AxiosResponse}
 */
// export const axiosResponse: AxiosResponse = {
//   data as Response,
// };
