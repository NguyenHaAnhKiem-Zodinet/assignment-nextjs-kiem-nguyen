import axiosMy from './axiosMy';

const userApi = {
  login: async (requestOption: IFormLogin) => {
    const url = '/users/login';
    return await axiosMy.post(url, requestOption);
  },
  checkOtp: async (requestOption: IFormOtp) => {
    const url = '/users/otp';
    return await axiosMy.post(url, requestOption);
  },
};

export default userApi;
