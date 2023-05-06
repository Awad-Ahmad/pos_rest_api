const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize(process.env.DB, process.env.USER, "", {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
});
module.exports = sequelize;
