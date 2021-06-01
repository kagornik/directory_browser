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
          (item: { id: string | null; name: string | null }, index: number) => (
            <PathItem
              index={index}
              name={item.name}
              key={item.id}
              id={item.id}
              pathArray={path}
            />
          )
        )}
    </div>
  );
};
