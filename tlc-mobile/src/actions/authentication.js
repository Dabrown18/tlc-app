import Api from '../util/api';

export const LOGIN = 'LOGIN';
export const UPDATE_USER = 'UPDATE_USER';

export default {

  login(username, password) {
    const payload = Api.post('/login', {
      username,
      password
    });

    return {
      type: 'LOGIN',
      payload
    };
  },

}