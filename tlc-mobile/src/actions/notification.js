import { AsyncStorage } from 'react-native';
import Api from '../util/api';

export const GET_USER_NOTIFICATIONS = 'GET_USER_NOTIFICATIONS';
export const MARK_NOTIFICATION_READ = 'MARK_NOTIFICATION_READ';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';

export default {

  getUserNotifications() {
    return (dispatch) => {
      return AsyncStorage.getItem('authToken')
        .then(authToken => {
          const payload = Api.get(`/notifications`, authToken);

          return dispatch({
            type: GET_USER_NOTIFICATIONS,
            payload
          });
        });
    }
  },

  deleteNotification(notificationId) {
    return dispatch => {
      return AsyncStorage.getItem('authToken')
        .then(authToken => {
          const payload = Api.del(`/notifications/${notificationId}` , authToken);

          return dispatch({
            type: DELETE_NOTIFICATION,
            payload
          });
        });
    }
  },

  markNotificationRead(notificationId) {
    return dispatch => {
      return AsyncStorage.getItem('authToken')
        .then(authToken => {
          const payload = Api.post(`/notifications/${notificationId}/read` ,authToken);

          return dispatch({
            type: MARK_NOTIFICATION_READ,
            payload
          });
        });
    }
  }
}