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
      <div>
        <h1>Your Order has been Confirmed</h1>
        <h2>Thank you for Shopping here</h2>
      </div>
      <div>
        Shop For More Right <Link to="/Home">Here</Link>
      </div>
    </>
  );
};

export default Checkout;
