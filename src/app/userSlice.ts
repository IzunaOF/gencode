import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type User = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  styleMode: "dark" | "light";
};

const initialState: User = {
  userId: 1,
  firstName: "UserName",
  lastName: "LastUserName",
  email: "userEmail@gmail.com",
  styleMode: "dark",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserMode: (state) => {
      state.styleMode = state.styleMode === "light" ? "dark" : "light";
    },
  },
});

export const { setUserMode } = userSlice.actions;

export const getTheme = (state: RootState) => state.userRefs.styleMode;

export default userSlice.reducer;
