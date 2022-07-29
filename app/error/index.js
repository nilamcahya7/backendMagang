const emailAlreadyTakenError = require('./emailAlreadyTakenError');
const emailInvalid = require('./emailInvalid');
const emailOrPhoneNotFound = require('./emailOrPhoneNotFound');
const passwordContentDoesntMatch = require('./passwordContentDoesntMatch');
const passwordIncorrect = require('./passwordIncorrect');
const phoneAlreadyTakenError = require('./phoneAlreadyTakenError');
const dataDoesntMatch = require('./dataDoesntMatch')

module.exports = {
    emailAlreadyTakenError,
    emailInvalid,
    emailOrPhoneNotFound,
    passwordContentDoesntMatch,
    passwordIncorrect,
    phoneAlreadyTakenError,
    dataDoesntMatch
};