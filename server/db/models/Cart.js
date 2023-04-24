const Sequelize = require("sequelize");
const db = require("../db");

// o: why is there a cart and an order table?
const Cart = db.define("cart", {
  orderId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
});

module.exports = Cart;
