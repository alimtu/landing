import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, App } from 'antd';
import faIR from 'antd/es/locale/fa_IR';
import { antdTheme } from '../styles/antd-theme';
import { Providers } from './providers';

import AntdCompat from './compat-client';

export const metadata = {
  title: 'Clinic App',
  description: 'Clinic Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AntdCompat />
        <ConfigProvider locale={faIR} direction="rtl" theme={antdTheme}>
          <App>
            <AntdRegistry>
              <Providers>{children}</Providers>
            </AntdRegistry>
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
