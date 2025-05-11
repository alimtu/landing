'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen  w-full flex justify-center items-center">
      <Button type="primary" size="large" onClick={() => router.push('/landing/diabet360')}>
        دیابت ۳۶۰
      </Button>
    </div>
  );
}
