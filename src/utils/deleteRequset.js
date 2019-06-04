import axios from 'axios'
import qs from 'qs'

export const deleteRequest = (url, params) => {

  return axios({
    method: 'delete',
    url: url,
    data: qs.stringify(params),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
};
