import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import DirectoryReducer from "./api/fetchDirectorySlice";

export const store = configureStore({
  reducer: {
    directory: DirectoryReducer,
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
