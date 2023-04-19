"use strict";

const {
  db,
  models: { User },
} = require("../server/db");
const Order = require("../server/db/models/Order");
const Product = require("../server/db/models/Product");
const Cart = require("../server/db/models/Cart");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 ***** database called "playingCards"
 */

const seed = async () => {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");
  await Promise.all(Users.map((user) => User.create(user)));
  await Promise.all(Cards.map((card) => Product.create(card)));
  await Promise.all(Orders.map((order) => Order.create(order)));
  await Promise.all(Carts.map((cart) => Cart.create(cart)));

  // Creating Users
  // const users = await Promise.all([
  //   User.create({ username: "cody", password: "123" }),
  //   User.create({ username: "murphy", password: "123" }),
  // ]);

  console.log(`seeded ${Users.length} users`);
  console.log(`seeded successfully`);
  return {
    Users: {
      cody: Users[0],
      murphy: Users[1],
    },
  };
};

const Cards = [
  {
    firstName: "DeAarongelo",
    lastName: "Fox",
    information: "Cooking the Warriors",
    price: "30000",
    quantity: "1",
  },
  {
    firstName: "Mike",
    lastName: "Trout",
    information: "Center fielder for the Los Angeles Angels",
    price: "100000",
    quantity: "1",
  },
];

const Users = [
  {
    username: "cody",
    password: "123",
  },
  {
    username: "murphy",
    password: "123",
  },
];

const Orders = [
  {
    userId: 1,
    fulfilled: false,
  },
];

const Carts = [
  {
    orderId: 1,
    productId: 1,
  },
];

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
