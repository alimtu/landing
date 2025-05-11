import axios from 'axios';
import config from '../../config';

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: config.apiUrl,
      timeout: 10000,
    });

    // Add request interceptor
    this.api.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // Add response interceptor
    this.api.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;

        // If error is 401 and we haven't tried to refresh token yet
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // Try to refresh token
            const { data } = await this.refreshToken();
            localStorage.setItem('token', data.accessToken);

            // Retry the original request with new token
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            return this.api(originalRequest);
          } catch (refreshError) {
            // If refresh token fails, redirect to login
            localStorage.removeItem('token');
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async verifyOtp(mobile, otp) {
    const { data } = await this.api.post('/v1/auth/verify-otp', { mobile, otp });
    return data;
  }

  async loginWithPassword(mobile, password) {
    const { data } = await this.api.post('/v1/auth/login', { mobile, password });
    return data;
  }

  async getProfile() {
    const { data } = await this.api.get('/v1/profile');
    return data;
  }

  async updateProfile(profileData) {
    const { data } = await this.api.put('/v1/profile', profileData);
    return data;
  }

  async refreshToken() {
    const { data } = await this.api.post('/v1/auth/refresh-token');
    return data;
  }

  async logout() {
    localStorage.removeItem('token');
    await this.api.post('/v1/auth/logout');
  }
}

export const authService = new AuthService();
