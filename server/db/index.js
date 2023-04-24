//this is the access point for all things database related!

const db = require("./db");
const Order = require("./models/Order");
const Product = require("./models/Product");
const User = require("./models/User");

//associations could go here!

User.hasMany(Order);
Order.hasOne(User);

Order.hasMany(Product);
Product.belongsToMany(Order, { through: "cart" });

module.exports = {
  db,
  models: {
    Order,
    Product,
    User,
  },
};
