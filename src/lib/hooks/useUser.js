import useAuthStore from '../store/authStore';

export const useUser = () => {
  const { user, accessToken, refreshToken, isAuthenticated, setUser, setTokens, setAuth, logout } =
    useAuthStore();

  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    setUser,
    setTokens,
    setAuth,
    logout,
  };
};
