const applicationError = require("./applicationError");

class dataDoesntMatch extends applicationError {
    constructor() {
        super('Data Doesnt Match');
    }

    get details() {
        return {
            message: 'Please Input The Real Data NIK, FullName, and Mother'
        };
    }
}

module.exports = dataDoesntMatch;