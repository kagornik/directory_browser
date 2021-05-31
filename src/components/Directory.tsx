import React from "react";
import { truncateName } from "../utils/customFunction";
import { formContainerStyles, formNameStyles } from "../styles/styles";
import { DirectoryProps } from "../types/types";

const Directory: React.FC<DirectoryProps> = ({
  name,
  icon,
  handleChangeDirectory,
  id,
}) => {
  return (
    <div
      style={formContainerStyles}
      onClick={() => handleChangeDirectory(id) || null}
    >
      <img src={icon} alt="Folder" />
      <span style={formNameStyles}>{truncateName(name)}</span>
    </div>
  );
};

export default Directory;
