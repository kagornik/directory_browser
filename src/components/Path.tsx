import React from "react";
import { currentDirectoryPathStyles } from "../styles/styles";
import { PathItem } from "./index";
import { useAppSelector } from "../utils/hooks";
import { selectPath } from "../api/selectors";

export const Path: React.FC = () => {
  const path = useAppSelector(selectPath);
  return (
    <div style={currentDirectoryPathStyles}>
      {path &&
        path.map(
          (
            //to fix
            elment: any,
            index: number
          ) => (
            <PathItem
              key={index}
              //to fix
              index={index}
              name={elment.name}
              id={elment.id}
              pathArray={path}
            />
          )
        )}
    </div>
  );
};
