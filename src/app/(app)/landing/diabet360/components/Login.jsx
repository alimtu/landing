'use client';

import LoginFLowComponent from '../../../../../components/LoginFlow';
import { Drawer } from 'antd';
import { useState } from 'react';
import { useUser } from '../../../../../lib/hooks/useUser';

const LoginComponent = () => {
  const { user, isAuthenticated } = useUser();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div
        className="w-full flex justify-center items-center font-bold text-2xl text-primary cursor-pointer"
        onClick={isAuthenticated ? () => {} : showDrawer}
      >
        {user && user.firstName ? <div>{user.firstName}</div> : 'ورود '}
      </div>

      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="w-full flex justify-center items-center">
          <LoginFLowComponent onClose={onClose} />
        </div>
      </Drawer>
    </div>
  );
};

export default LoginComponent;
