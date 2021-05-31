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
  path: { id: string | null; name: string | null }[];
  files: File[];
  directories: Directory[];
}

export interface DirectoryProps {
  name: string;
  id: string;
  //to fix
  icon: any;
  handleChangeDirectory: any;
}

export interface FileProps {
  name: string;
  //to fix
  icon: any;
}

export interface PathItemProps {
  name: string;
  id: string;
  pathArray: { id: string | null; name: string | null }[];
  index: number;
}
