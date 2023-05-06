const Sequelize = require("sequelize");
const sequelize = require("../../config/database");
const Supplier = require("./Supplier");
const Product = require("./Product");
const User = require("./User");
const PurchaseOrder = sequelize.define("PurchaseOrder", {
  purchaseOrderId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Product",
      key: "ProductId",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitPice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  SubTotal: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  SupplierId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Supplier",
      key: "SupplierId",
    },
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  UserId: {
    type: Sequelize.INTEGER,
    references: {
      model: "User",
      key: "UserId",
    },
  },
});
/// each User has many PurchaseOrder (one to many)
//// here foreign key will be in PurchaseOrder
User.hasMany(PurchaseOrder, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
PurchaseOrder.belongsTo(User, {
  onDelete: "CASCADE",
});

/// each Product has many PurchaseOrder (one to many)
//// here foreign key will be in PurchaseOrder
Product.hasMany(PurchaseOrder, {
  onDelete: "CASCADE",
  foreignKey: "productId",
});
PurchaseOrder.belongsTo(Product, {
  onDelete: "CASCADE",
});
/// each Supplier has many PurchaseOrder (one to many)
//// here foreign key will be in PurchaseOrder
Supplier.hasMany(PurchaseOrder, {
  onDelete: "CASCADE",
  foreignKey: "supplierId",
});
PurchaseOrder.belongsTo(Supplier, {
  onDelete: "CASCADE",
});

module.exports = PurchaseOrder;
