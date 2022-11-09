const express = require("express");
const dotENV = require('dotenv')
const router = require("./router/index");
const notFoundError = require('./errors/not-found-error');
const counstomErrorHandler = require("./middleware/coustomErrorHandler");
const PORT = 3000;
const app = express();
dotENV.config();
app.use(express.json());


app.use("/",router)
app.use(notFoundError)
app.use(counstomErrorHandler);

app.listen(PORT, () => {
    console.log("server runing ::")
})