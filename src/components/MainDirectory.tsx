import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import {
  fetchRootDirectory,
  selectRootFiles,
  selectRootDirectory,
} from "../api/rootDirectorySlice";
import Form from "./Form";
import { currentDirectoryPathStyles } from "../styles/MainDirectoryStyles";
import folderIcon from "../assets/folder_icon.png";
import fileIcon from "../assets/file_icon.png";
import imageIcon from "../assets/image_icon.png";

const RootDirectory: React.FC = () => {
  const dispatch = useAppDispatch();
  const files = useAppSelector(selectRootFiles);
  const directories = useAppSelector(selectRootDirectory);

  const changeDirectory = () => {
    dispatch(fetchRootDirectory());
  };

  useEffect(() => {
    dispatch(fetchRootDirectory());
  }, []);

  return (
    <>
      <div style={currentDirectoryPathStyles}>root</div>
      {directories.map((item, index) => (
        <Form
          key={index}
          name={item.name}
          icon={folderIcon}
          handleChangeDirectory={changeDirectory}
        />
      ))}
      {files.map((item, index) =>
        item.name.includes(".jpg") ? (
          <Form
            key={index}
            name={item.name}
            icon={imageIcon}
            handleChangeDirectory={null}
          />
        ) : (
          <Form
            key={index}
            name={item.name}
            icon={fileIcon}
            handleChangeDirectory={null}
          />
        )
      )}
    </>
  );
};

export default RootDirectory;
