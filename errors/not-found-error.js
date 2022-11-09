const notFoundError = (req,res) => {
    return res.status(400).json({msg : "Not Fount Error"})
}

module.exports = notFoundError;