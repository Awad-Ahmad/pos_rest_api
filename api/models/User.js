const sequelize = require("../../config/database");
const Sequelize = require("sequelize");
const User = sequelize.define("User", {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accountType: {
    type: Sequelize.ENUM("admin", "cashier", "inventoryOfficer"),
  },
});

module.exports = User;
