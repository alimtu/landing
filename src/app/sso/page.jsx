'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthStore from '../../stores/authStore';
import { fetcher } from '../../lib/swr/fetcher';

const PATIENT_SSO = 'v1/website/patients/sso';

export default function PatientSSO() {
  const [needAuthenticate, setNeedAuthenticate] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, setToken, setUser } = useAuthStore();

  useEffect(() => {
    const handleSSO = async () => {
      const token = searchParams.get('token');
      const redirect = searchParams.get('redirect');

      if (!token) return;

      try {
        const data = await fetcher(`${PATIENT_SSO}?token=${token}`);

        // Set both token and user data in the store
        setToken(data.data.accessToken);
        if (data.data.user) {
          setUser(data.data.user);
        }

        if (redirect) {
          window.location.href = redirect;
        }
      } catch (error) {
        console.error('SSO Error:', error);
        if (error.message.includes('401') && !isAuthenticated) {
          setNeedAuthenticate(true);
          // You might want to show a login modal here
        } else if (redirect) {
          window.location.href = redirect;
        }
      }
    };

    handleSSO();
  }, [searchParams, isAuthenticated, setToken, setUser]);

  useEffect(() => {
    if (needAuthenticate && isAuthenticated) {
      const redirect = searchParams.get('redirect');
      if (redirect) {
        window.location.href = redirect;
      }
    }
  }, [needAuthenticate, isAuthenticated, searchParams]);

  return (
    <div className="mt-[100px]">
      <h1 className="mt-5 mb-5 text-center">در حال احراز هویت</h1>
    </div>
  );
}
