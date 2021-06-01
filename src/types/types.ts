export interface Directory {
  name: string;
  id: string;
}

export interface Path {
  id: string | null;
  name: string | null;
}

export interface File {
  name: string;
}

export interface DirectoryState {
  name: string | null;
  id: string | null;
  path: Path[];
  files: File[];
  directories: Directory[];
}

export interface DirectoryProps {
  name: string;
  id: string;
  icon: string;
  handleChangeDirectory: (id: string) => void;
}

export interface FileProps {
  name: string;
  icon: string;
}

export interface PathItemProps {
  name: string | null;
  id: string | null;
  pathArray: Path[];
  index: number;
}
