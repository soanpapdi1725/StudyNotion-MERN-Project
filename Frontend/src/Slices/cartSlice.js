import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
  totalCost: localStorage.getItem("totalCost")
    ? JSON.parse(localStorage.getItem("totalCost"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const index = state.cart.findIndex((item) => item._id === course._id);
      if (index > 0) {
        toast.error("Already Added in Cart");
        return;
      }

      state.cart.push(course);
      state.totalItems++;
      state.totalCost += course.price;
      toast.success(`${course.courseName} is Added in cart`);
    },

    removeFromCart: (state, action) => {
      const course = action.payload;
      state.cart = state.cart.filter((item) => item._id !== course._id);
      state.totalItems--;
      state.totalCost -= course.price;

      toast.success("Course is removed from cart");
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
