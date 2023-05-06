const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const { connectToDb } = require("./config/dbConnection");

/// Models
const ProductUnit = require("./api/models/productUnit");
const Product = require("./api/models/Product");
const ProductCategory = require("./api/models/ProductCategory");
const User = require("./api/models/User");
const Customer = require("./api/models/Customer");
const Supplier = require("./api/models/Supplier");
const ContactInfo = require("./api/models/ContactInfo");
/// for json and for form-data
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.DB);

connectToDb();

////Relationship between tables
///1- product relationships
// /// each ProductUnit has many Products (one to many)
// //// here foreign key will be in Product
// Product.hasMany(ProductUnit, {
//   onDelete: "CASCADE",
//   foreignKey: "unitId",
// });
// ProductUnit.belongsTo(Product, {
//   onDelete: "CASCADE",
// });

// /// each ProductCategory has many Products (one to many)
// //// here foreign key will be in Product
// Product.hasMany(ProductCategory, {
//   onDelete: "CASCADE",
//   foreignKey: "categoryId",
// });
// ProductCategory.belongsTo(Product, {
//   onDelete: "CASCADE",
// });

/// each User can add many Products (one to many)
//// here foreign key will be in Product
// Product.hasMany(User, {
//   onDelete: "CASCADE",
//   foreignKey: "userId",
// });
// User.belongsTo(Product, {
//   onDelete: "CASCADE",
// });

const PORT = process.env.PORT || 3000;

sequelize
  .sync({
    alter: true,
    logging: false,
    logging: console.log,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
