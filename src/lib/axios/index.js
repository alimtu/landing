import axios from 'axios';
import { getSession } from 'next-auth/react';
import config from '../../config';

// Create an axios instance with the baseURL from the config
const axiosInstance = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    try {
      // Get the session from NextAuth
      const session = await getSession();

      console.log('sessionsession', session);

      // Check if the session has an accessToken
      if (session?.accessToken) {
        // Attach the token in the Authorization header
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
    } catch (error) {
      console.error('Error getting session or token', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (token might be expired or invalid)
      localStorage.removeItem('auth-storage'); // You might want to clear the session storage if needed
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
