import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const userTypeSlice = createSlice({
  name: "userDetail",
  initialState: initialState,
  reducers: {
    setUser: (state, value) => {
      state.user = value.payload;
    },
  },
});

export const { setUser } = userTypeSlice.actions;
export default userTypeSlice.reducer;
