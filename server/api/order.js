const router = require("express").Router();
const Product = require("../db/models/Product");
const Cart = require("../db/models/Cart");
const Order = require("../db/models/Order");

router.get("/", async (req, res, next) => {
  try {
    const order = await Order.findAll();
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    // const orderId = req.params.id;

    const order = await Order.findByPk(req.params.id, { include: [Cart] });
    res.send(order);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.send(order);
  } catch (err) {
    next(err);
  }
});


// o: you can leave this as is and create another route for updating the cart
//  which is just an unfullfiled order
router.put("/:id", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.update(req.body);
    res.send(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// o: make sure to remove this

//   where: { id: orderId },
//   include: [
//     { model: User, attributes: ["name", "email"] },
//     {
//       model: Cart,
//       include: [{ model: Product, attributes: ["name", "price"] }],
//     },
//   ],
// });
// res.send(order);
