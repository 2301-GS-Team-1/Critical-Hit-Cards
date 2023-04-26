import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {};
export const fetchUserCart = createAsyncThunk("userCart", async (id) => {
  try {
    const { data } = await axios.get(`/api/order/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const userCartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    addCardToCart: (state, action) => {
      const card = state.find((card) => card.id == action.payload.id);
      if (card) {
        card.quantity += 1;
      } else {
        state.push(action.payload);
      }
      return state;
    },
    removeCardFromCart: (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    },
    clearCardFromCart: (state) => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});
export const selectUserCart = (state) => {
  return state.userCart;
};
// export const { addCardToCart, removeCardFromCart, clearCardFromCart } =
//  SingleCartSlice.actions;
export default userCartSlice.reducer;
