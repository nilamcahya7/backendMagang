const applicationError = require("./applicationError");

class emailInvalid extends applicationError {
    constructor() {
        super('Invalid e-mail address');
    }

    get details() {
        return {
            message: 'Valid e-mail address only contain latin letters, @, and . (Example: xander@gmail.com'
        };
    }
}

module.exports = emailInvalid;