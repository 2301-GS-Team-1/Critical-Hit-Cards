import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import cardReducer from "../features/cardSlice";
import singleCardReducer from "../features/singleCardSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardReducer,
    singleCard: singleCardReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
