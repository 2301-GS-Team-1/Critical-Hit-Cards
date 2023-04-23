const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdminCheck = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).send("DO NOT HAVE ACCESS!");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
//reusable security checks
module.exports = {
  requireToken,
  isAdminCheck,
};
