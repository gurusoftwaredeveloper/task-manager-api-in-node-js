class CoustomErrorApi extends Error {
    constructor(msg, statusCode) {
        console.log(msg)
        super(msg);
        this.statusCode = statusCode;
    }
}

const createCoustomError = (msg, statusCode) => {
    return new CoustomErrorApi(msg, statusCode);
}

module.exports = { createCoustomError,CoustomErrorApi }