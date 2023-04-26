import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";
import { link } from "react-router-dom";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  try {
    const { data } = await axios.get("/api/product");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const cardSlice = createSlice({
  name: "cards",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export const selectCards = (state) => state.cards;
export default cardSlice.reducer;
