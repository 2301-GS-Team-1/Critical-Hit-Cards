const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");

// o: the cart and orders are effectively representing the same thing... not sure
//  why this exists per se?
router.get("/", async (req, res, next) => {
  try {
    const cart = await Cart.findAll();
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: { orderId: req.params.id },
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).send(newCart);
  } catch (err) {
    next(err);
  }
});
// router.post('/', async (req, res, next) => {
//   try {
//     res.status(201).send(await Cart.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

router.delete("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    await cart.destroy();
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    await cart.update(req.body);
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
