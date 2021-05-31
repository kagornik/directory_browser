import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { fetchRootDirectory, fetchDirectory } from "../api/fetchDirectorySlice";
import { selectFiles, selectDirectories } from "../api/selectors";
import Directory from "./Directory";
import File from "./File";
import { currentDirectoryPathStyles } from "../styles/styles";
import folderIcon from "../assets/folder_icon.png";
import fileIcon from "../assets/file_icon.png";
import imageIcon from "../assets/image_icon.png";

const MainDirectory: React.FC = () => {
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
      <div style={currentDirectoryPathStyles}>root</div>
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

export default MainDirectory;
