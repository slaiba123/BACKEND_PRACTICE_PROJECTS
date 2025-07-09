// frontend/src/services/api.js
import axios from 'axios';

export const shortenUrl = (url) => {
  return axios.post('/url', { url });
};
