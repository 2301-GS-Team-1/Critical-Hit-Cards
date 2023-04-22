const Sequelize = require("sequelize");
const db = require("../db");
const Cart = require("./Cart");

const Order = db.define("order", {
  userId: {
    type: Sequelize.INTEGER,
    // unique: true,
    allowNull: false,
  },
  fulfilled: {
    type: Sequelize.BOOLEAN,
  },
});

Order.afterCreate(async (Order) => {
  try {
    const existingCart = await Cart.findOne({ where: { orderId: Order.id } });
    if (!existingCart) {
      await Cart.create({ orderId: Order.id });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = Order;
