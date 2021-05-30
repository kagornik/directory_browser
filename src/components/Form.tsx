import React from "react";
import { truncateName } from "../utils/customFunction";

interface FormProps {
  name: string;
  icon: any;
  handleChangeDirectory: any;
}

const Form: React.FC<FormProps> = ({ name, icon, handleChangeDirectory }) => {
  //   const dispatch = useAppDispatch();

  return (
    <span
      style={{
        marginLeft: "46px",
        marginTop: "25px",
      }}
    >
      <img src={icon} alt="Folder" />
      <span style={{ color: "white" }} onClick={handleChangeDirectory || null}>
        {truncateName(name)}
      </span>
    </span>
  );
};

export default Form;
