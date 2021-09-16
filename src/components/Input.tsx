import React from "react";

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("Changing...");
  };
  return (
    <input
      value={props.value}
      //onChange={(e) => props.onChange(e)}
      onChange={handleInputChange}
      type="text"
    />
  );
}
