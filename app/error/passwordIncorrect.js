const applicationController = require('./applicationError');

class passwordIncorrect extends applicationController {
    constructor() {
        super('Incorrect password');
    }

    get details() {
        return {
            message: 'Incorrect password. Try again or click \'Forgot password\'',
        };
    }
}

module.exports = passwordIncorrect;