const sequelize = require("../../config/database");
const Sequelize = require("sequelize");
const User = require("./User");
const Customer = require("./Customer");

const Invoice = sequelize.define("invoice", {
  invoiceId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  // userId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "User",
  //     key: "userId",
  //   },
  // },
  // customerId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "Customer",
  //     key: "customerId",
  //   },
  // },
  paymentType: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  /// note search about it
  totalAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  amountTendered: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  bankAccountName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bankAccountNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateRecorded: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

/// each Customer  has many Invoices (one to many)
//// here foreign key will be in Invoice
Customer.hasMany(Invoice, {
  onDelete: "CASCADE",
  foreignKey: "customerId",
});
Invoice.belongsTo(Customer, {
  onDelete: "CASCADE",
});

/// each User has many Invoices (one to many)
//// here foreign key will be in invoice
User.hasMany(Invoice, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
Invoice.belongsTo(User, {
  onDelete: "CASCADE",
});

module.exports = Invoice;
