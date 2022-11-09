const { CoustomErrorApi } = require("./coustomError")

const coustomErrorHandler = (err, req, res, next) => {
    console.log(err)
    if (err instanceof CoustomErrorApi) {
        return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).json({ msg: "Something went Wrong Try After Some Time" })
}

module.exports = coustomErrorHandler;