import Api from '../util/api';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const UPDATE_USER = 'UPDATE_USER';

export default {

  login(username, password) {
    const payload = Api.post('http://34.213.225.108/login', {
      username,
      password
    });

    return {
      type: 'LOGIN',
      payload
    };
  },

}