import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// request type
export interface Request {
  name: string;
  owner: {
    id: string;
    type?: 'account' | 'organization';
  };
}

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
  method: 'POST',
  url: 'https://circleci.com/api/v2/context',
  headers: {
    'content-type': 'application/json',
    authorization: 'Basic REPLACE_BASIC_AUTH',
  },
  data: {
    name: '',
    owner: {
      id: '',
      type: 'organization',
    },
  } as Request,
};

/**
 * Axios Response
 * @constant {AxiosResponse}
 */
// export const axiosResponse: AxiosResponse = {
//   data as Response,
// };
