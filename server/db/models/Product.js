const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  images: {
    type: Sequelize.JSON,
    defaultValue:
      "https://www.travelandleisure.com/thmb/E5szi7N2r1eN-8b3vkl5STvWz9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg",
  },
  flavorText: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: Math.floor(Math.random() * 1000),
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

Product.beforeCreate((instance, options) => {
  instance.price = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
});

module.exports = Product;
