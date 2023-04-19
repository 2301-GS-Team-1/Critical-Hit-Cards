const router = require("express").Router();
const { Product, Cart } = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [Product],
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
    res.send(newCart);
  } catch (err) {
    next(err);
  }
});

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
