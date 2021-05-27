import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootDirectoryReducer from "./api/rootDirectorySlice";

export const store = configureStore({
  reducer: {
    root: rootDirectoryReducer,
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
