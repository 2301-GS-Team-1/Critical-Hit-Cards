// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import React from "react";

// const initialState = {};

// export const fetchSingleCart = createAsyncThunk("singCart", async (id) => {
//   try {
//     const { data } = await axios.get(`/api/cart/${id}`);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// });

// export const singleCartSlice = createSlice({
//   name: "singleCart",
//   initialState,
//   reducers: {
//     addCardToCart: (state, action) => {
//       const card = state.find((card) => card.id == action.payload.id);
//       if (card) {
//         card.quantity += 1;
//       } else {
//         state.push(action.payload);
//       }
//       return state;
//     },
//     removeCardFromCart: (state, action) => {
//       return state.filter((card) => card.id !== action.payload);
//     },
//     clearCardFromCart: (state) => {
//       return [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchSingleCart.fulfilled, (state, action) => {
//       state = action.payload;
//       return state;
//     });
//   },
// });
// export const selectSingleCart = (state) => {
//   return state.singleCart;
// };

// export const { addCardToCart, removeCardFromCart, clearCardFromCart } =
//   SingleCartSlice.actions;

// export default singleCart.reducer;
