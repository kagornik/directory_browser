import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { fetchRootDirectoryFilesAsync } from "../api/rootDirectorySlice";
import folderIcon from "../assets/folder_icon.png";
import fileIcon from "../assets/file_icon.png";
import imageIcon from "../assets/image_icon.png";

const RootDirectory: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRootDirectoryFilesAsync());
  }, []);

  return (
    <>
      <div
        style={{
          color: "white",
          fontSize: "20px",
          marginLeft: "46px",
          marginTop: "25px",
        }}
      >
        root
      </div>
      <div>
        <img src={folderIcon} alt="Folder" />
        <img src={fileIcon} alt="Folder" />
        <img src={imageIcon} alt="Folder" />
      </div>
    </>
  );
};

export default RootDirectory;
