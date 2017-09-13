export function isValidUsername(username) {
  return username && username.trim().length > 2;
}

export function isValidEmail(email) {
  const  re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function isEmpty(value) {
  return value === null || typeof(value) === 'undefined' || value === '' || value.trim().length === 0;
}