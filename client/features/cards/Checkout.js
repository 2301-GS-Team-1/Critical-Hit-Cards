import React from "react";
import { Link } from "react-router-dom";
// import { router } from "../../../server/auth";

// router.get("/:id", async (req, res, next) => {
//   try {
//     // const orderId = req.params.id;
//     const order = await Order.findByPk(req.params.id);
//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// });

const Checkout = () => {
  return (
    <>
      <div key="order-confirmation">
        <h1>Order Confirmed!</h1>
        <h2>Gotta catch em all!</h2>
      </div>
      <div key="buy-more">
        Buy More <Link to="/Home">Here</Link>
      </div>
    </>
  );
};

export default Checkout;
