import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { DirectoryState } from "../types/types";

const initialState: DirectoryState = {
  name: null,
  id: null,
  files: [],
  directories: [],
};

export const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<DirectoryState>) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.files = action.payload.files;
      state.directories = action.payload.directories;
    },
  },
});

export const { setFiles } = directorySlice.actions;

export const fetchRootDirectory = (): AppThunk => (dispatch) => {
  fetch(
    "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setFiles(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchDirectory =
  (directoryId: string): AppThunk =>
  (dispatch) => {
    fetch(
      "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/" +
        directoryId,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setFiles(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

export default directorySlice.reducer;
