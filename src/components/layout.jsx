'use client';

import { UserOutlined, CalendarOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '../lib/hooks/useAuth';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import useAuthStore from '../stores/authStore';
import Image from 'next/image';
const { Header, Sider, Content } = Layout;

const MyLayout = ({ children }) => {
  const { logout } = useAuth();
  const { user } = useAuthStore();

  const userMenuItems = [
    {
      key: '1',
      label: 'خروج',
      onClick: () => logout(),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', direction: 'rtl' }} className="relative">
      <Header className="bg-white flex items-center justify-between px-4 lg:px-6 h-18 lg:h-16 fixed top-0 z-10 w-full">
        <div className="flex items-center">
          <Image
            src="/images/drnext-horizontal-logo.svg"
            alt="drnext logo"
            width={120}
            height={32}
            className="hidden lg:block"
          />
          <Image
            src="/images/drnext-horizontal-logo.svg"
            alt="drnext logo"
            width={90}
            height={24}
            className="block lg:hidden"
          />
        </div>

        <nav
          className="hidden lg:flex"
          style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 40 }}
        >
          <Link href="#" style={{ color: '#222', fontWeight: 500 }}>
            تخصص‌ها
          </Link>
          <Link href="#" style={{ color: '#222', fontWeight: 500 }}>
            نوبت دهی
          </Link>
          <Link href="#" style={{ color: '#222', fontWeight: 500 }}>
            آزمایش در محل
          </Link>
          <Link href="#" style={{ color: '#222', fontWeight: 500 }}>
            فروشگاه
          </Link>
          <Link href="#" style={{ color: '#222', fontWeight: 500 }}>
            مجله سلامت
          </Link>
          <Link href="#" style={{ color: '#222', fontWeight: 500 }}>
            دستیار هوشمند تشخیص
          </Link>
        </nav>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {user ? (
            <Dropdown menu={{ items: userMenuItems }} placement="bottomLeft">
              <div className="cursor-pointer flex items-center gap-2">
                <Avatar icon={<UserOutlined />} className="w-6 h-6" />
                <span className="font-bold text-xs lg:text-sm">
                  {user.firstName} {user.lastName}
                </span>
              </div>
            </Dropdown>
          ) : (
            <Link href="#">
              <Button
                type="default"
                style={{
                  borderRadius: 8,
                  padding: '0 24px',
                  fontWeight: 500,
                  color: '#244A9A',
                  borderColor: '#e0e6ed',
                  height: 40,
                }}
              >
                ورود بیمار
              </Button>
            </Link>
          )}
        </div>
      </Header>
      <Content style={{ background: '#fff', minHeight: 280 }} className="mt-18 lg:mt-16">
        {children}
      </Content>
    </Layout>
  );
};

export default MyLayout;
