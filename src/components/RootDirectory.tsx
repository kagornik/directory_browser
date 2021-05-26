import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import folderIcon from "../assets/folder_icon.png";
import fileIcon from "../assets/file_icon.png";
import imageIcon from "../assets/image_icon.png";

const RootDirectory: React.FC = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRootDirectory());
  // }, []);

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
