'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../../lib/hooks/useAuth.jsx';
import { useUser } from '../../lib/hooks/useUser';
import { Form, Input, Button, Card, Typography, Spin, App } from 'antd';
import { MobileOutlined, LockOutlined, NumberOutlined } from '@ant-design/icons';
import { fetcher } from '../../lib/swr/fetcher';

const { Text } = Typography;

export default function LoginFLowComponent({ onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [userStatus, setUserStatus] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { requestOtp, verifyOtp, loginWithPassword } = useAuth();
  const { setAuth, isAuthenticated, user, accessToken } = useUser();

  const { message } = App.useApp();

  const handleMobileSubmit = async values => {
    setLoading(true);
    try {
      const response = await requestOtp(values.mobile);

      console.log('responseresponse', response);

      setUserStatus(response);
      setMobileNumber(values.mobile);
      setStep(2);
      message.success('کد تایید با موفقیت ارسال شد');
    } catch (err) {
      console.log('ERROR IS --->>', err);
      message.error('ارسال کد تایید با مشکل مواجه شد');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async values => {
    setLoading(true);
    try {
      if (!userStatus.userPassword) {
        const result = await verifyOtp(mobileNumber, values.otp, userStatus);

        if (result) {
          await setAuth({ mobile: mobileNumber }, result.accessToken, result.refreshToken);

          try {
            const profileData = await fetcher('/v1/patients/auth/profile');
            const userData = profileData.data;
            setAuth(
              {
                ...userData,
                mobile: mobileNumber,
              },
              result.accessToken,
              result.refreshToken
            );
          } catch (profileError) {
            console.error('Error fetching profile:', profileError);
          }
          message.success('کد تایید با موفقیت تایید شد');
          onClose();
        }
      } else {
        setStep(3);
      }
    } catch (err) {
      message.error(err.message || 'Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async values => {
    setLoading(true);
    try {
      const result = await loginWithPassword(mobileNumber, values.password);
      if (result?.ok) {
        const from = searchParams.get('from') || '/';
        router.push(from);
        message.success('ورود با موفقیت انجام شد');
      }
    } catch (err) {
      message.error(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Form form={form} onFinish={handleMobileSubmit} layout="vertical" requiredMark={false}>
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: 'لطفا شماره موبایل خود را وارد کنید' },
                { pattern: /^09[0-9]{9}$/, message: 'شماره موبایل معتبر نیست' },
              ]}
            >
              <Input
                prefix={<MobileOutlined />}
                placeholder="شماره موبایل خود را وارد کنید"
                size="large"
                dir="rtl"
                variant="underlined"
                count={{
                  show: true,
                  max: 11,
                }}
                maxLength={11}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                ارسال کد
              </Button>
            </Form.Item>
          </Form>
        );

      case 2:
        return (
          <Form form={form} onFinish={handleOtpSubmit} layout="vertical" requiredMark={false}>
            <Form.Item
              name="otp"
              rules={[
                { required: true, message: 'لطفا کد تایید را وارد کنید' },
                { len: 4, message: 'کد تایید باید 4 رقم باشد' },
              ]}
            >
              <Input
                prefix={<NumberOutlined />}
                placeholder="کد تایید را وارد کنید"
                size="large"
                maxLength={6}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                تایید کد
              </Button>
            </Form.Item>
            <Button
              type="link"
              block
              onClick={() => {
                setStep(1);
                form.resetFields();
              }}
            >
              تغییر شماره موبایل
            </Button>
          </Form>
        );

      case 3:
        return (
          <Form form={form} onFinish={handlePasswordSubmit} layout="vertical" requiredMark={false}>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'لطفا رمز عبور را وارد کنید' },
                { min: 6, message: 'رمز عبور باید حداقل 6 کاراکتر باشد' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="رمز عبور را وارد کنید"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                ورود
              </Button>
            </Form.Item>
            <Button
              type="link"
              block
              onClick={() => {
                setStep(1);
                form.resetFields();
              }}
            >
              تغییر شماره موبایل
            </Button>
          </Form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
      <Text type="secondary" className="block ">
        {step === 1 && 'کد تایید به شماره موبایل شما ارسال خواهد شد'}
        {step === 2 && `کد تایید به شماره موبایل ${mobileNumber} ارسال خواهد شد`}
        {step === 3 && 'رمز عبور خود را وارد کنید.'}
      </Text>
      {renderStepContent()}
    </div>
  );
}
