import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCardToCart } from "./slices/AddCardToCart";

const AddCardToCart = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCardToCart({ name, price, quantity }));
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form className="addCardToCart" onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label> Price: </label>
      <input
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label> quantity: </label>
      <input
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button type="submit">Add To Cart</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default AddCardtoCart;
