import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userTypeSlice = createSlice({
  name: "userType",
  initialState: initialState,
  reducers: {
    setUserType: (state, value) => {
      state.user = value.payload;
    },
  },
});

export const { setUserType } = userTypeSlice.actions;
export default userTypeSlice.reducer;
