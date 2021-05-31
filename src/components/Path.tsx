import React, { useState, useEffect } from "react";
import { currentDirectoryPathStyles } from "../styles/styles";
import { PathItem } from "./index";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { selectDirectoryName, selectDirectoryId } from "../api/selectors";

export const Path: React.FC = () => {
  //to fix
  const [path, setPath] = useState<any>([]);
  const name = useAppSelector(selectDirectoryName);
  const id = useAppSelector(selectDirectoryId);
  useEffect(() => {
    name && setPath([...path, id]);
  }, [name]);

  console.log("path", path);

  return (
    <div style={currentDirectoryPathStyles}>
      {path &&
        path.map((elment: { name: string; id: string }, index: number) => (
          <PathItem
            key={index}
            name={elment.name}
            id={elment.id}
            pathArray={path}
          />
        ))}
    </div>
  );
};
