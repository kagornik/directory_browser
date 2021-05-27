import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import { RootDirectoryState } from "../types/types";

const initialState: RootDirectoryState = {
  name: null,
  id: null,
  files: [],
  directories: [],
};

export const rootDirectorySlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setRootFiles: (state, action: PayloadAction<RootDirectoryState>) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.files = action.payload.files;
      state.directories = action.payload.directories;
    },
  },
});

export const { setRootFiles } = rootDirectorySlice.actions;

export const selectRootFiles = (state: RootState) => state.root.files;

export const fetchRootDirectoryFilesAsync = (): AppThunk => (dispatch) => {
  fetch(
    "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setRootFiles(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default rootDirectorySlice.reducer;
