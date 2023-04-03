import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import codeReducer from "../release/generator/generatorSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    userRefs: userReducer,
    codeGenerator: codeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
