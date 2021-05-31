import { RootState } from "../store";

export const selectFiles = (state: RootState) => state.directory.files;
export const selectDirectories = (state: RootState) =>
  state.directory.directories;
export const selectDirectoryName = (state: RootState) => state.directory.name;
export const selectDirectoryId = (state: RootState) => state.directory.id;
