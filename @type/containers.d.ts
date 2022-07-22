interface ILogin {
  formik: FormikConfig<IFormLogin>;
}

interface IFormSignUp {
  role: string;
  name: string;
  email: string;
  password: string;
  rePassword: string;
  subscribe: string[];
  accept: string[];
}
