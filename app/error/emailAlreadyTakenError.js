const applicationError = require('./applicationError');

class emailAlreadyTakenError extends applicationError {
  constructor(email) {
    super(`${email} is already taken!`);
    this.email = email;
  }

  get details() {
    return { email: this.email };
  }
}

module.exports = emailAlreadyTakenError;
