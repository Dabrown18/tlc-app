import { AsyncStorage } from 'react-native';
import Api from '../util/api';

export const GET_CURRENT_USER_PROFILE = 'GET_CURRENT_USER_PROFILE';
export const UPDATE_CURRENT_USER_PROFILE = 'UPDATE_CURRENT_USER_PROFILE';

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
  },

  updateCurrentUserProfile({ username, email, firstName, lastName, webAddress, twitter,
                             occupation, facebook, snapchat, instagram, patreon }) {
    return dispatch => {
      return AsyncStorage.multiGet(['authToken', 'userId'])
        .then(result => {
          const authToken = result[0][1];
          const userId = result[1][1];

          const payload = Api.put(`/users/${userId}/profile`, {
            username,
            email,
            firstName,
            lastName,
            webAddress,
            occupation,
            facebook,
            snapchat,
            twitter,
            instagram,
            patreon
          }, authToken);

          return dispatch({
            type: UPDATE_CURRENT_USER_PROFILE,
            payload
          });
        });
    }
  }
}