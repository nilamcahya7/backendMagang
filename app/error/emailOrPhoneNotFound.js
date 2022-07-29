const applicationError = require('./applicationError');

class emailOrPhoneNotFound extends applicationError {
  constructor() {
    super('User Not Found');
  }

  get details() {
    return { message: 'E-mail or phone number not found.' };
  }
}

module.exports = emailOrPhoneNotFound;
