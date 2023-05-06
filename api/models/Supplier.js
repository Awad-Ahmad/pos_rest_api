const sequelize = require("../../config/database");
const Sequelize = require("sequelize");
const Product = require("./Product");
const Invoice = require("./Invoice");
const Supplier = sequelize.define("Supplier", {
  supplierId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  SupplierCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // invoiceId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "Invoice",
  //     key: "invoiceId",
  //   },
  // },
  // productId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "Product",
  //     key: "productId",
  //   },
  // },
});
/// each Product has many PurchaseOrder (one to many)
//// here foreign key will be in PurchaseOrder
Product.hasMany(Supplier, {
  onDelete: "CASCADE",
  foreignKey: "productId",
});
Supplier.belongsTo(Product, {
  onDelete: "CASCADE",
});
/// each Invoice has many Sales (one to many)
//// here foreign key will be in PurchaseOrder
Invoice.hasMany(Supplier, {
  onDelete: "CASCADE",
  foreignKey: "salesId",
});
Supplier.belongsTo(Invoice, {
  onDelete: "CASCADE",
});

module.exports = Supplier;
