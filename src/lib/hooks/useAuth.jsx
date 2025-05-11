import { useRouter } from 'next/navigation';
import { postFetcher } from '../../lib/swr/fetcher';
import useAuthStore from '../../stores/authStore';

export const useAuth = () => {
  const router = useRouter();
  const { setToken, setUser, logout: storeLogout } = useAuthStore();

  const SEND_VERIFICATION_TOKEN = (resend = false) =>
    `/v1/patients/auth/${resend ? 'resend' : 'send'}-verification-token`;

  const CHECK_VERIFICATION_TOKEN = () => `/v1/patients/auth/check-verification-token`;

  const requestOtp = async (mobile, isResend = false) => {
    try {
      const response = await postFetcher(SEND_VERIFICATION_TOKEN(isResend), {
        mobile,
        source: 'besina',
      });
      if (response?.error) {
        throw new Error(response.error);
      }
      let { data } = response;
      return data;
    } catch (error) {
      throw error;
    }
  };

  const verifyOtp = async (mobile, otp, userStatus) => {
    console.log('userStatususerStatus', userStatus);

    try {
      const response = await postFetcher(CHECK_VERIFICATION_TOKEN(), {
        mobile,
        token: otp,
        unique_token: userStatus.unique_token,
      });
      if (response?.error) {
        throw new Error(response.error);
      }
      let { data } = response;
      return data;
    } catch (error) {
      throw error;
    }
  };

  const loginWithPassword = async (mobile, password) => {
    try {
      const response = await postFetcher('/v1/patients/auth/login', {
        mobile,
        password,
      });
      if (response?.error) {
        throw new Error(response.error);
      }
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      return { ok: true };
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    storeLogout();
    router.push('/login');
  };

  return {
    requestOtp,
    verifyOtp,
    loginWithPassword,
    logout,
  };
};
