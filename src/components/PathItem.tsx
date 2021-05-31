import React from "react";
import { fetchDirectoryFromPath } from "../api/fetchDirectorySlice";
import { removePath } from "../api/fetchDirectorySlice";
import { useAppDispatch } from "../utils/hooks";
import { PathItemProps } from "../types/types";
import { pathItemStyles } from "../styles/styles";

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
  const handleClickPath = (id: string, index: number) => {
    dispatch(removePath(index));
    dispatch(fetchDirectoryFromPath(id));
  };

  if (pathArray.length > 2) {
    return (
      <span
        style={pathItemStyles}
        onClick={() => {
          handleClickPath(id, index);
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
          handleClickPath(id, index);
        }}
      >
        {secondCondition ? name : ` / ${name}`}
      </span>
    );
  }
};
