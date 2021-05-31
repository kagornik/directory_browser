import React from "react";
import { PathItemProps } from "../types/types";

export const PathItem: React.FC<PathItemProps> = ({ name, id, pathArray }) => {
  return (
    <span style={{ color: "white" }}>
      {pathArray.shift() === name ? name : "/ " + name + " / "}
    </span>
  );
};
