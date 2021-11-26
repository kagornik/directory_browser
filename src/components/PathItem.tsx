import React from "react";
import { fetchDirectoryFromPath, removePath } from "../api/directorySlice";
import { pathItemStyles } from "../styles/styles";
import { PathItemProps } from "../types/types";
import { useAppDispatch } from "../utils/hooks";

export const PathItem: React.FC<PathItemProps> = ({
  name,
  id,
  pathArray,
  index,
}) => {
  const dispatch = useAppDispatch();
  const firstCondition =
    pathArray[0].name == name || pathArray[pathArray.length - 1].name == name;

  const secondCondition = pathArray[0].name == name;
  const handleChangePath = (id: string | null, index: number) => {
    dispatch(removePath(index));
    dispatch(fetchDirectoryFromPath(id));
  };

  if (pathArray.length > 2) {
    return (
      <span
        style={pathItemStyles}
        onClick={() => {
          handleChangePath(id, index);
        }}
      >
        {!firstCondition ? ` / ${name} / ` : name}
      </span>
    );
  } else {
    return (
      <span
        style={pathItemStyles}
        onClick={() => {
          handleChangePath(id, index);
        }}
      >
        {secondCondition ? name : ` / ${name}`}
      </span>
    );
  }
};
