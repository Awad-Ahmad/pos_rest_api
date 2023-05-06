const sequelize = require("../../config/database");
const Sequelize = require("sequelize");
const User = require("./User");
const Supplier = require("./Supplier");
const Customer = require("./Customer");
const ContactInfo = sequelize.define("ContactInfo", {
  contactInfoId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  // customerId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "Customer",
  //     key: "customerId",
  //   },
  // },
  // supplierId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "Supplier",
  //     key: "supplierId",
  //   },
  // },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "User",
  //     key: "userId",
  //   },
  // },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

///Relationship
/// each  contactInfo has one and just one Customer
//// here foreign key will be in ContactInfo
ContactInfo.hasOne(Customer, { foreignKey: "customerId" });
Customer.belongsTo(ContactInfo, { foreignKey: "customerId" });

/// each  contactInfo has one and just one Users
//// here foreign key will be in ContactInfo
ContactInfo.hasOne(User, { foreignKey: "userId" });
User.belongsTo(ContactInfo, { foreignKey: "userId" });

/// each  contactInfo has one and just one supplier
//// here foreign key will be in ContactInfo
ContactInfo.hasOne(Supplier, { foreignKey: "supplierId" });
Supplier.belongsTo(ContactInfo, { foreignKey: "supplierId" });

module.exports = ContactInfo;
