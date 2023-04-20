import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCardtoCart } from "./slices/AddCardToCart";

const AddCardtoCart = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCardtoCart({ firstName, lastName, price, quantity }));
    setFirstName("");
    setLastName("");
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
      <label>Last Name: </label>
      <input
        name="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
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
