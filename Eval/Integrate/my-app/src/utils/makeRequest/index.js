import axios from 'axios';
import { BACKEND_URL } from '../../Constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      headers: {
        Authorization: 'Bearer QWlzaHdhcnlhIE4=',
      },
      ...dynamicConfig,
    };

    const { data } = await axios(requestDetails);

    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export default makeRequest;
