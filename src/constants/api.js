export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh-token',

  USERS: '/users',
  USER: (id) => `/users/${id}`,
  USER_PROFILE: '/users/profile',
}; 