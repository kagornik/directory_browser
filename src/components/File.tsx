import React from "react";
import { truncateName } from "../utils/customFunction";
import { formContainerStyles, formNameStyles } from "../styles/styles";
import { FileProps } from "../types/types";

export const File: React.FC<FileProps> = ({ name, icon }) => {
  return (
    <div style={formContainerStyles}>
      <img src={icon} alt="File" />
      <span style={formNameStyles}>{truncateName(name)}</span>
    </div>
  );
};
