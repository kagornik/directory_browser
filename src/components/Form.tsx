import React from "react";
import { truncateName } from "../utils/customFunction";
import { formContainerStyles, formNameStyles } from "../styles/styles";

interface FormProps {
  name: string;
  //do poprawy
  icon: any;
  handleChangeDirectory: any;
}

const Form: React.FC<FormProps> = ({ name, icon, handleChangeDirectory }) => {
  //   const dispatch = useAppDispatch();

  return (
    <div style={formContainerStyles} onClick={handleChangeDirectory || null}>
      <img src={icon} alt="Folder" />
      <span style={formNameStyles}>{truncateName(name)}</span>
    </div>
  );
};

export default Form;
