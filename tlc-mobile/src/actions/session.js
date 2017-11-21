export const SET_AUTH_DETAILS = 'SET_AUTH_DETAILS';

export default {
  setAuthDetails(userId, authToken) {
    return {
      type: SET_AUTH_DETAILS,
      payload: {
        userId,
        authToken
      }
    };
  }
}