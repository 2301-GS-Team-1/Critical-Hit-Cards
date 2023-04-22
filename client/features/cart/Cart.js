import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCart, selectCart } from "./CartSlice";
//import AddCardToCart from "./AddCardToCart";
//import { addToCart } from "../cards/SingleCartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cart = useSelector(selectCart);
  // const { productId } = cart;

  useEffect(() => {
    dispatch(fetchCart(id));
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
        <h1>this is the cart</h1>
      </div>
    </div>
  );
};
