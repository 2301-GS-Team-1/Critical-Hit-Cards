import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

const initialState = {};

export const fetchSingleCart = createAsyncThunk("singCart", async (id) => {
  try {
    const { data } = await axios.get(`/api/cart/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const SingleCartSlice = createSlice({
  name: "singleCart",
  initialState,
  reducers: {
    addCardToCart: (state, action) => {
      const card = state.find((card) => card.id === action.payload.id);
      if (card) {
        card.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCardFromCart: (state, action) => {
      const cardIndex = state.findIndex((card) => card.id === action.payload.id);
      if (cardIndex !== -1) {
        const card = state[cardIndex];
        if (card.quantity > 1) {
          card.quantity -= 1;
        } else {
          state.splice(cardIndex, 1);
        }
      }
    },
    clearCardFromCart: (state) => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCart.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export const selectSingleCart = (state) => {
  return state.singleCart;
};

export const { addCardToCart, removeCardFromCart, clearCardFromCart } =
  SingleCartSlice.actions;

export default SingleCartSlice.reducer;


