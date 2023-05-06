const sequelize = require("../../config/database");
const Sequelize = require("sequelize");

const ProductCategory = sequelize.define("ProductCategory", {
  categoryId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = ProductCategory;
