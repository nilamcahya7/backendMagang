const applicationError = require('./applicationError');

class phoneAlreadyTakenError extends applicationError {
  constructor(phone) {
    super(`${phone} is already taken!`);
    this.phone = phone;
  }

  get details() {
    return { phone: this.phone };
  }
}

module.exports = phoneAlreadyTakenError;
