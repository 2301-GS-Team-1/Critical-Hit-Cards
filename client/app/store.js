import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import cardReducer from "../features/cards/slices/allCardsSlice";
import singleCardReducer from "../features/cards/slices/singleCardSlice";
import userCartReducer from "../features/cards/SingleCartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardReducer,
    singleCard: singleCardReducer,
    userCart: userCartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
