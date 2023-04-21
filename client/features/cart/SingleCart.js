import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCart, selectSingleCart } from "./slices/singleCartSlice";

const SingleCart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cart = useSelector(selectSingleCart);
  const { orderId, productId } = cart;

  useEffect(() => {
    dispatch(fetchSingleCart(id));
  }, [dispatch]);


// const handleDelete = async (id) => {
//   try {
//     await dispatch(deleteCard(id));
//   } catch (err) {
//     next(err);
//   }
// };

return (
  <div id="single-cart">
    <div id="single-cart-info">
      <p>Order: {orderId}</p>
      <p>Product: {productId}</p>
    </div>
  </div>
);
};

export default SingleCart
