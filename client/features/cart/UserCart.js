import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserCart, selectUserCart } from "./slices/singleCartSlice";

const UserCart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cart = useSelector(selectUserCart);
  const { orderId, productId } = cart;

  // const addToCart = () => {

  // }


  useEffect(() => {
    dispatch(fetchUserCart(id));
  }, [dispatch]);


// const handleDelete = async (id) => {
//   try {
//     await dispatch(deleteCard(id));
//   } catch (err) {
//     next(err);
//   }
// };

return (
  <div id="user-cart">
    <div id="user-cart-info">
      <p>Order: {orderId}</p>
      <p>Product: {productId}</p>
    </div>
  </div>
);
};

export default UserCart
