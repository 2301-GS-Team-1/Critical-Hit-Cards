import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const TOKEN = window.localStorage.getItem("token");

  //grabs the cartItems and sets in the use State
  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    if (cartItemsString) {
      const parsedCartItems = JSON.parse(cartItemsString);
      setCartItems(parsedCartItems);
    }
  }, []);

  //removes product id to guests cart
  //(THIS CURRENTLY DELETES BY THE ID. IF MULTIPLE SAME ITEMS INSIDE WILL DELETE BOTH)
  const handleRemove = (itemId) => {
    if (!TOKEN) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      console.log(cartItems);
    }
  };
  //handles checkout
  const handleCheckout = (evt) => {
    evt.preventDefault();
    if (TOKEN) {
      // Proceed with checkout
      console.log("Checkout successful");
    } else {
      // Redirect to login page or display error message
      history.push("/login");
    }
  };

  //cannot figure out how to re-render once a item is deleted
  return (
    <div id="userCart">
      <h1>User Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
          return (
            <div key={index} id="userCartCard">
              <img id="all-cards-image" src={item.images.small} />
              <h2>
                {item.name}, ${item.price}
              </h2>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <Link to="/checkout">
                <button onClick={() => handleCheckout(cartItems)}>
                  Checkout
                </button>
              </Link>
            </div>
          );
        })
      ) : (
        <h1>your cart is empty</h1>
      )}
      {/* <button onClick={() => handleCheckout(cartItems)}>Checkout</button> */}
    </div>
  );
};

export default UserCart;
