const router = require("express").Router();
const {
  models: { User },
} = require("../db");

const { requireToken } = require("./gatekeepingMiddleware");
const { isAdminCheck } = require("./gatekeepingMiddleware");

router.get("/", requireToken, isAdminCheck, async (req, res, next) => {
  try {
    //checks if user is admin. only admin can check users

    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
