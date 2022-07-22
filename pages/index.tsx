import { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { Login, Otp } from '../containers';

import * as Yup from 'yup';
import Swal from 'sweetalert2';
import userApi from '../services/userApi';
import { useFormik } from 'formik';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Home: NextPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha(process.env.NEXT_PUBLIC_ACTION_EXECUTE_RECAPTCHA);
    setToken(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  const formikLogin = useFormik<IFormLogin>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values: IFormLogin): Promise<void> => {
      const requestLogin: IFormLogin = {
        ...values,
        captcha: token,
      };

      await userApi
        .login(requestLogin)
        .then(() => {
          Swal.fire({
            title: 'Logged in successfully !!!',
            icon: 'success',
          });
          setIsLogin(true);
        })
        .catch(() => {
          Swal.fire({
            title: 'Login failed !!!',
            icon: 'error',
          });
        });

      handleReCaptchaVerify();
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Please enter valid email').required('Please enter valid email'),
      password: Yup.string()
        .min(8, 'Please enter valid')
        .required('Please enter valid password')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
    }),
  });

  const formikOtp = useFormik<IFormOtp>({
    initialValues: {
      otp: '',
    },
    onSubmit: async (values: IFormOtp): Promise<void> => {
      await userApi
        .checkOtp(values)
        .then(() => {
          Swal.fire({
            title: 'Welcome the website !!!',
            icon: 'success',
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Wrong OTP !!!',
            icon: 'error',
          });
        });
    },
    validationSchema: Yup.object().shape({
      otp: Yup.number()
        .test('len', 'Must be exactly 6 characters', (val) =>
          val && val.toString().length === 6 ? true : false,
        )
        .required('Please enter otp'),
    }),
  });

  return (
    <Layout title="Login" isHeader={false} isFooter={false}>
      <>
        {!isLogin && <Login formik={formikLogin} />}
        {isLogin && <Otp formik={formikOtp} />}
      </>
    </Layout>
  );
};

export default Home;
