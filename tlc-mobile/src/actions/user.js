import Api from '../util/api';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

export default {

  followUser(userId) {
    return (dispatch, getState) => {
      const { authToken } = getState().session;

      const payload = Api.post(`/users/${userId}/follow`, {}, authToken);

      return dispatch({
        type: FOLLOW_USER,
        payload
      });
    }
  },

  unFollowUser(userId) {
    return (dispatch, getState) => {
      const { authToken } = getState().session;

      const payload = Api.del(`/users/${userId}/unfollow`, authToken);

      return dispatch({
        type: UNFOLLOW_USER,
        payload
      });
    }
  },
}