import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import cardReducer from "../features/cards/slices/allCardsSlice";
import singleCardReducer from "../features/cards/slices/singleCardSlice";
import cartReducer from "../features/cart/CartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardReducer,
    singleCard: singleCardReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/cart/CartSlice";
export * from "../features/auth/authSlice";
