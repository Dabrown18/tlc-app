export const REGISTER_STEP1 = 'REGISTER_STEP1';
export const REGISTER_STEP2 = 'REGISTER_STEP2';
export const REGISTER_STEP3 = 'REGISTER_STEP3';

export default {
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
  }

}