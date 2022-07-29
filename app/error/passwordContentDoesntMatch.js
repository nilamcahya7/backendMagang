const applicationController = require('./applicationError');

class passwordContentDoesntMatch extends applicationController {
    constructor() {
        super('Password requirements not met');
    }

    get details() {
        return { message: 'Password must between 8 to 20 characters which contain at least one numeric digit, one uppercase, and one lowercase letter.'}
    }
}

module.exports = passwordContentDoesntMatch;