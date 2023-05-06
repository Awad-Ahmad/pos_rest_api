const sequelize = require("../../config/database");
const Sequelize = require("sequelize");
const ProductUnit = require("./productUnit");
const ProductCategory = require("./ProductCategory");
const User = require("./User");
const Product = sequelize.define("Product", {
  productId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // /// unit Id foreignKey
  // unitId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "Unit",
  //     key: "unitId",
  //   },
  // },
  /// categoryId foreignKey
  // categoryId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "ProductCategory",
  //     key: "categoryId",
  //   },
  // },
  unitInStock: {
    //is the quantity of items available in the inventory
    type: Sequelize.FLOAT,
    allowNull: false,
  },

  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

  discountPercentage: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

  reorderLevel: {
    ///is the number that will notify the system if the item or products needs to be reorder
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  /// userId foreignKey that refers to the user who processed the purchase order
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "User",
  //     key: "userId",
  //   },
  // },
});

/// each ProductCategory has many Products (one to many)
//// here foreign key will be in Product
ProductCategory.hasMany(Product, {
  onDelete: "CASCADE",
  foreignKey: "categoryId",
});
Product.belongsTo(ProductCategory, {
  onDelete: "CASCADE",
});
/// each User can add many Products (one to many)
//// here foreign key will be in Product
User.hasMany(Product, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
Product.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

/// each ProductUnit has many Products (one to many)
//// here foreign key will be in Product
ProductUnit.hasMany(Product, {
  onDelete: "CASCADE",
  foreignKey: "unitId",
});
Product.belongsTo(ProductUnit, {
  onDelete: "CASCADE",
  foreignKey: "unitId",
});

module.exports = Product;
