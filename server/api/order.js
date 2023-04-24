const router = require("express").Router();
const Product = require("../db/models/Product");
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

    const order = await Order.findByPk(req.params.id);
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

// router.put("/:id", async (req, res, next) => {
//   try {
//     const order = await Order.findByPk(req.params.id);
//     await order.update(req.body);
//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// });

//create a put route to update order/unfulfilled with the product id
router.put("/:id", async (req, res, next) => {
  try {
    const { productId } = req.body;
    const userId = req.user;
    const order = await Order.findOne({
      where: { userId: userId, fulfilled: false },
    });
    await order.update({ productId });
    res.send(order);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
