import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import React from "react";
import axios from "axios";
import { link } from "react-router-dom";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  try {
    const { data } = await axios.get("/api/cards");
    return data;
  } catch(error) {
    console.log(error);
  }
});

// export const addCardAsync = createAsyncThunk(
//   "card/addCard",
//   async ({ name, address }) => {
//     const { data } = await axios.post("http://localhost:3000/api/cards", {
//       name,
//       address,
//     });
//     return data;
//   }
// );

// export const deleteStudentAsync = createAsyncThunk(
//   "student/deleteStudent",
//   async (id) => {
//     await axios.delete(
//       `http://localhost:3000/api/students/${id}`
//     );
//     return id;
//   }
// );

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
