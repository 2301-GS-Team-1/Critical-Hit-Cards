import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import React from "react";

const initialState = {
  cartItems: [],
  cartTotalPrice: 0,
};

export const fetchCart = createAsyncThunk("fetchCart", async (id) => {
  try {
    const { data } = await axios.get(`/api/cart/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});
export const updateCart = createAsyncThunk(
  "updateCart",
  async (props, { getState }) => {
    const { data } = await axios.put(`/api/cart/${getState().cart.id}`, props);
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCardToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCardFromCart: (state, action) => {
      return state.cartItems.filter((card) => card.id !== action.payload);
    },
    clearCardFromCart: (state) => {
      return { cartItems: [], cartTotalPrice: 0 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export const selectCart = (state) => {
  return state.cart;
};

export const { addCardToCart, removeCardFromCart, clearCardFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
