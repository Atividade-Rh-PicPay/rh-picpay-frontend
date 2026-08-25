import { ChangeEvent } from "react";
import { StyledInputField } from "./style";

interface IInputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

function InputField({ placeholder, type, value, onChange, required }: IInputProps) {
  return (
    <StyledInputField
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default InputField;
