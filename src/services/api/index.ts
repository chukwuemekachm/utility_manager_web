import axios from 'axios';

export * from './request';

const {
  API_URL = 'https://utility-manager.herokuapp.com/api',
} = process.env;

export default axios.create({
  baseURL: API_URL,
  timeout: 3000,
});
