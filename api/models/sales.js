const sequelize = require("../../config/database");
const Sequelize = require("sequelize");
const Product = require("./Product");
const Invoice = require("./Invoice");
const Sales = sequelize.define("Sales", {
  salesId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  invoiceId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Invoice",
      key: "invoiceId",
    },
  },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Product",
      key: "productId",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  subTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

/// each Product has many PurchaseOrder (one to many)
//// here foreign key will be in PurchaseOrder
Product.hasMany(Sales, {
  onDelete: "CASCADE",
  foreignKey: "productId",
});
Sales.belongsTo(Product, {
  onDelete: "CASCADE",
});
/// each Invoice has many Sales (one to many)
//// here foreign key will be in PurchaseOrder
Invoice.hasMany(Sales, {
  onDelete: "CASCADE",
  foreignKey: "salesId",
});
Sales.belongsTo(Invoice, {
  onDelete: "CASCADE",
});
module.exports = Sales;
