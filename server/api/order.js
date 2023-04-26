const router = require("express").Router();
const Product = require("../db/models/Product");
const Order = require("../db/models/Order");
const { requireToken } = require("./gatekeepingMiddleware");
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
    const newOrder = await Order.findOrCreate(req.body);
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

router.post("/:id", requireToken, async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { productId } = req.body;
    console.log("req.body", req.body)
    // find cart associated with user
    const [order, created] = await Order.findOrCreate({
      where: {
        userId: userId,
        productId: productId,
        fulfilled: false,
      },
    });
    const newCart = await Order.findOne({
      where: {
        userId: userId,
      },
      include: {
        model: Order,
        attributes: ["id", "quantity", "productId"],
        include: {
          model: Product,
          attributes: ["name", "price", "imageUrl"],
        },
      },
    });
    res.send(newCart);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
