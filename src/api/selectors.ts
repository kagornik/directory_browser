import { RootState } from "../store";

export const selectFiles = (state: RootState) => state.directory.files;
export const selectDirectories = (state: RootState) =>
  state.directory.directories;
