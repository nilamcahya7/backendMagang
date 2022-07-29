const applicationError = require("./applicationError");

class NIKwrong extends applicationError {
    constructor() {
        super(`${NIK} WRONG!`);
    }

    get details() {
        return {
            message: 'Please Input The Real Data NIK'
        };
    }
}

module.exports = NIKwrong;