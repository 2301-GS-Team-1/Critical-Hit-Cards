//this is the access point for all things database related!

const db = require("./db");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const Product = require("./models/Product");
const User = require("./models/User");

//associations could go here!

User.hasOne(Cart);
User.hasMany(Order);

Cart.hasMany(Product);

Order.hasMany(Product);

module.exports = {
  db,
  models: {
    Cart,
    Order,
    Product,
    User,
  },
};
