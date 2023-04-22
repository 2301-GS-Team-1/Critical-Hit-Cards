import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Cards from "../features/cards/AllCards";
import SingleCard from "../features/cards/SingleCard";
import Home from "../features/home/Home";
import { me } from "./store";
import { Cart } from "../features/cart/Cart";
//import { AddCardToCart } from "../features/cart/AddCardToCart";
/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<Cards />} />
          <Route path="/products/:id" element={<SingleCard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          {/* Implemented the route below for testing purposes. Need to decide where to be placed. */}
          <Route path="/products" element={<Cards />} />
          <Route path="/products/:id" element={<SingleCard />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
