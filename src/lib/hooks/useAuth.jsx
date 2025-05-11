import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import { postFetcher } from '../../lib/swr/fetcher';

export const useAuth = () => {
  const router = useRouter();

  const requestOtp = async mobile => {
    try {
      const response = await postFetcher('/v1/auth/request-otp', { mobile });

      console.log('responseresponseresponse', response);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const verifyOtp = async (mobile, otp) => {
    console.log('Verify ....');

    try {
      const result = await signIn('credentials', {
        mobile,
        otp,
        redirect: true,
        callbackUrl: '/dashboard',
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      throw error;
    }
  };

  const loginWithPassword = async (mobile, password) => {
    try {
      const result = await signIn('credentials', {
        mobile,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    signOut({ callbackUrl: '/login' });
  };

  return {
    requestOtp,
    verifyOtp,
    loginWithPassword,
    logout,
  };
};
