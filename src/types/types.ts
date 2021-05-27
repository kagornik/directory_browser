export interface Directory {
  name: string;
  id: string;
}

export interface File {
  name: string;
}

export interface RootDirectoryState {
  name: string | null;
  id: string | null;
  files: File[];
  directories: Directory[];
}
