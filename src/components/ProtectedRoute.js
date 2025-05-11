import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { checkAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!checkAuth()) {
      router.push('/login');
    }
  }, [checkAuth, router]);

  return checkAuth() ? children : null;
};

export default ProtectedRoute;
