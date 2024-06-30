// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // 替换为你的 Flask API 地址
  withCredentials: true, // 确保请求携带 cookies
});

export default axiosInstance;
