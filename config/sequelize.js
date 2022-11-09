const sequelize = require('sequelize');
const DATABASE_URL= "postgres://postgres:1234@localhost:5432/newdemo"

const Sequelize = new sequelize(DATABASE_URL, {
    logging : true
});

Sequelize.authenticate().then(() => {
    console.log("Database Connected ::");
}).catch(() => {
    console.log("There is some issue ::");
})

Sequelize.sync({ force: true });

module.exports = Sequelize;