import Api from '../util/api';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';

export default {
  forgotPassword(emailOrUsername) {
    return {
      type: FORGOT_PASSWORD,
      payload: Api.post(`/forgot`, { email: emailOrUsername })
    };
  }
}