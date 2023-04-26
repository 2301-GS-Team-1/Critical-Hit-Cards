import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const TOKEN = window.localStorage.getItem("token");

  //grabs the cartItems and sets in the use State
  const cartItemsString = localStorage.getItem("cartItems");

  useEffect(() => {
    const parsedCartItems = JSON.parse(cartItemsString) || [];
    setCartItems(parsedCartItems);
  }, [cartItemsString]);

  //removes product id to guests cart
  //(THIS CURRENTLY DELETES BY THE ID. IF MULTIPLE SAME ITEMS INSIDE WILL DELETE BOTH)
  const handleRemove = (itemId) => {
    if (!TOKEN) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems); // update state
    }
  };
  //handles checkout
  const handleCheckout = () => {
    localStorage.removeItem("cartItems");
  };

  //cannot figure out how to re-render once a item is deleted
  return (
    <div id="guestCart">
      <h1>guest cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
          return (
            <div key={index} id="guestCartCard">
              <img id="all-cards-image" src={item.images.small} />
              <h2>
                {item.name}, ${item.price}
              </h2>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          );
        })
      ) : (
        <h1>your cart is empty</h1>
      )}
      <Link to="/checkout">
        <button onClick={() => handleCheckout(cartItems)}>Checkout</button>
      </Link>
    </div>
  );
};

export default GuestCart;
