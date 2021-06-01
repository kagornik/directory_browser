import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { fetchRootDirectory, fetchDirectory } from "./api/directorySlice";
import { selectFiles, selectDirectories } from "./api/selectors";
import { Path, File, Directory } from "./components";
import folderIcon from "./assets/folder_icon.png";
import fileIcon from "./assets/file_icon.png";
import imageIcon from "./assets/image_icon.png";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const files = useAppSelector(selectFiles);
  const directories = useAppSelector(selectDirectories);

  const changeDirectory = (id: string) => {
    dispatch(fetchDirectory(id));
  };

  useEffect(() => {
    dispatch(fetchRootDirectory());
  }, []);

  return (
    <>
      <Path />
      {directories &&
        directories.map((item, index) => (
          <Directory
            key={index}
            name={item.name}
            id={item.id}
            icon={folderIcon}
            handleChangeDirectory={changeDirectory}
          />
        ))}
      {files &&
        files.map((item, index) =>
          item.name.includes(".jpg") ? (
            <File key={index} name={item.name} icon={imageIcon} />
          ) : (
            <File key={index} name={item.name} icon={fileIcon} />
          )
        )}
    </>
  );
};

export default App;
