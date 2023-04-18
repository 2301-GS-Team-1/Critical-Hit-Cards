const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  firstName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.travelandleisure.com/thmb/E5szi7N2r1eN-8b3vkl5STvWz9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg",
  },
  information: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
