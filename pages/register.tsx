import { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { SignUp } from '../containers';

const Register: NextPage = () => {
  return (
    <Layout title="Sign Up" isHeader={false} isFooter={false}>
      <>
        <SignUp />
      </>
    </Layout>
  );
};

export default Register;
