import axios from 'axios';
import qs from 'qs';

export default async function request<RequestConfig>(options: RequestConfig): unknown {
  axios({
    ...options,
    paramsSerializer() {
      return qs.stringify(options.qs, { arrayFormat: 'brackets' });
    },
  })
    .then(function (response) {
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
      console.log(response.body);
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
}
