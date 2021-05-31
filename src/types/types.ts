export interface Directory {
  name: string;
  id: string;
}

export interface File {
  name: string;
}

export interface DirectoryState {
  name: string | null;
  id: string | null;
  files: File[];
  directories: Directory[];
}

export interface DirectoryProps {
  name: string;
  id: string | null;
  //to fix
  icon: any;
  handleChangeDirectory: any;
}

export interface FileProps {
  name: string;
  //to fix
  icon: any;
}
