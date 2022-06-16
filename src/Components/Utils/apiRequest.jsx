import axios from 'axios';

export function requestApiData(url) {
  return axios.request({
    method: 'get',
    url,
  });
}