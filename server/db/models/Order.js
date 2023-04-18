const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
  fulfilled: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Order;
