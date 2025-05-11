'use client';

import { UserOutlined, CalendarOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useAuth } from '../lib/hooks/useAuth';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { useSession } from 'next-auth/react';
const { Header, Sider, Content } = Layout;

const MyLayout = ({ children }) => {
  const { logout } = useAuth();
  const { data: session } = useSession();

  const userMenuItems = [
    {
      key: '1',
      label: 'Profile',
    },
    {
      key: '2',
      label: 'Settings',
    },
    {
      key: '3',
      label: 'Logout',
      onClick: () => logout(),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', direction: 'rtl' }}>
      <Sider
        theme="light"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold text-blue-600">Clinic App</h1>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <CalendarOutlined />,
              label: <Link href="/">Dashboard</Link>,
            },
            {
              key: '2',
              icon: <TeamOutlined />,
              label: <Link href="/patients">Patients</Link>,
            },
            {
              key: '3',
              icon: <SettingOutlined />,
              label: <Link href="/settings">Settings</Link>,
            },
          ]}
        />
      </Sider>
      <Layout style={{ marginRight: 200 }}>
        <Header
          style={{
            padding: '0 24px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <Dropdown menu={{ items: userMenuItems }} placement="bottomLeft">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar icon={<UserOutlined />} />
              <span>{session?.user?.firstName}</span>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
