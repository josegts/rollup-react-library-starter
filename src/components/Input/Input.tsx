import React from "react";
import "./Input.scss";
import { Input, InputProps } from "antd";

export interface InputTextProps extends InputProps {
    /**
     * 
     */
}

const InputText:React.FC<InputTextProps> = (props: InputTextProps) => {
  return <Input type="text" style={{
    backgroundColor: "#fcd6d6",
  }} {...props} />;
};

export default InputText;