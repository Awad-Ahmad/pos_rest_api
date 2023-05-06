const sequelize = require("../../config/database");
const Sequelize = require("sequelize");

const Customer = sequelize.define("Customer", {
  customerId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  customerCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Customer;
