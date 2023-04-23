const router = require("express").Router();
const {
  models: { Product, Cart },
} = require("../db");
module.exports = router;
const { isAdminCheck } = require("./gatekeepingMiddleware");
const { requireToken } = require("./gatekeepingMiddleware");
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      // explicitly select only the firstName, lastName, imageUrl, information, price, quantity fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: [
      //   "firstName",
      //   "lastName",
      //   "imageUrl",
      //   "information",
      //   "price",
      //   "quantity",
      // ],
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

router.post("/", requireToken, isAdminCheck, async (req, res, next) => {
  console.log(req.body);
  try {
    let newProduct = await Product.create(req.body);
    res.statusCode(201).send(newProduct);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", requireToken, isAdminCheck, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireToken, isAdminCheck, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
