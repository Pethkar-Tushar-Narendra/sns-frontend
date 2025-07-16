import axios from 'axios';

const API = axios.create({
  baseURL: 'https://sns-backend-8f68.onrender.com/api', // or your deployed backend URL
});

// Set JWT token on each request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
