const Sequelize = require("sequelize");
const db = require("../db");

// o: you are missing a total (if you have time)
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
