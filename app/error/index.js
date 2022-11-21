const emailAlreadyTakenError = require('./emailAlreadyTakenError');
const emailInvalid = require('./emailInvalid');
const emailOrPhoneNotFound = require('./emailOrPhoneNotFound');
const passwordContentDoesntMatch = require('./passwordContentDoesntMatch');
const passwordIncorrect = require('./passwordIncorrect');
const phoneAlreadyTakenError = require('./phoneAlreadyTakenError');

module.exports = {
    emailAlreadyTakenError,
    emailInvalid,
    emailOrPhoneNotFound,
    passwordContentDoesntMatch,
    passwordIncorrect,
    phoneAlreadyTakenError,
};