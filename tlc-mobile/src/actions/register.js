import Api from '../util/api';

export const REGISTER_STEP1 = 'REGISTER_STEP1';
export const REGISTER_STEP2 = 'REGISTER_STEP2';
export const REGISTER_STEP3 = 'REGISTER_STEP3';
export const REGISTER = 'REGISTER';
export const RESET_STATUS = 'RESET_STATUS';
export const CHECK_USERNAME = 'CHECK_USERNAME';
export const CHECK_EMAIL = 'CHECK_EMAIL';

export default {
  checkUsername(username) {
    return {
      type: CHECK_USERNAME,
      payload: Api.get(`/check/username/${username}`)
    };
  },

  checkEmail(email) {
    return {
      type: CHECK_EMAIL,
      payload: Api.get(`/check/email/${email}`)
    };
  },

  registerStep1(username, firstName, lastName, email, password) {
    return {
      type: REGISTER_STEP1,
      payload: {
        username,
        firstName,
        lastName,
        email,
        password
      }
    };
  },

  registerStep2(ethnicity) {
    return {
      type: REGISTER_STEP2,
      payload: {
        ethnicity
      }
    };
  },

  registerStep3(gender, birthDate) {
    return {
      type: REGISTER_STEP3,
      payload: {
        gender,
        birthDate
      }
    };
  },

  register(username, firstName, lastName, email, password, ethnicity, gender, birthDate) {
    const payload = Api.post('/signup', {
      username,
      firstName,
      lastName,
      email,
      password,
      ethnicity,
      gender,
      birthDate
    });

    return {
      type: REGISTER,
      payload
    };
  },

  resetStatus() {
    return {
      type: RESET_STATUS
    }
  }
}