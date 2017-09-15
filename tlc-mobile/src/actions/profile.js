import { AsyncStorage } from 'react-native';
import Api from '../util/api';

export const GET_CURRENT_USER_PROFILE = 'GET_CURRENT_USER_PROFILE';

export default {

  getCurrentUserProfile() {
    return dispatch => {
      return AsyncStorage.multiGet(['authToken', 'userId'])
        .then(result => {
          console.log('multiGet', result);
          const authToken = result[0][1];
          const userId = result[1][1];

          const payload = Api.get(`/users/${userId}`, authToken);

          return dispatch({
            type: GET_CURRENT_USER_PROFILE,
            payload
          });
        });
    };
  }
}