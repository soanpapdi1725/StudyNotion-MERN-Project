import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Slices/authSlice";
import userTypeSlice from "../Slices/userTypeSlice";
import cartSlice from "../Slices/cartSlice";
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  userType: userTypeSlice,
  cart: cartSlice,
});

export default rootReducer;
