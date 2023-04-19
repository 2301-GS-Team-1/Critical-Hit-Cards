import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

export const fetchSingleCard = createAsyncThunk("singleCard", async (id) => {
  try {
    const { data } = await axios.get(`/api/cards/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});
// export const deleteCampusAsync = createAsyncThunk(
//   "campus/deleteCampus",
//   async (id) => {
//    await axios.delete(
//       `http://localhost:3000/api/campuses/${id}`
//     );
//     return id;
//   }
// );
// export const editCampusAsync = createAsyncThunk(
//   "campus/editCampus",
//   async ({id, name, address, description}) => {
//     const { data } = await axios.put(`http://localhost:3000/api/campuses/${id}`, {
//       name, address, description
//     });
//     return data;
//   }
// );
export const singleCardSlice = createSlice({
  name: "singleCard",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCard.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const selectCard = (state) => state.cards;
export default singleCardSlice.reducer;
