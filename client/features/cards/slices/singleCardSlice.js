import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

const initialState = {};

export const fetchSingleCard = createAsyncThunk("singleCard", async (id) => {
  try {
    const { data } = await axios.get(`/api/product/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const singleCardSlice = createSlice({
  name: "singleCard",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCard.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export const selectSingleCard = (state) => {
  return state.singleCard;
};
export default singleCardSlice.reducer;
