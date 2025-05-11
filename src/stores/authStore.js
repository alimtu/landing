import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    set => ({
      token: null,
      user: null,
      isAuthenticated: false,
      setToken: token => set({ token, isAuthenticated: true }),
      setUser: user => set({ user }),
      logout: () => set({ token: null, user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // unique name for localStorage
    }
  )
);

export default useAuthStore;
