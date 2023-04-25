const Sequelize = require("sequelize");
const db = require("../db");
const Product = require("./Product.");

const Cart = db.define("cart", {
  quantity: {
    type: Sequelize.INTEGER,
  },
  ProductId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
  },
});

module.exports = Cart;
