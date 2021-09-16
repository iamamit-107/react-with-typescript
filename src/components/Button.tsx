import React from "react";

type ButtonProps = {
  handleButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
};

export default function Button(props: ButtonProps) {
  return <button onClick={(e) => props.handleButton(e, "10")}>click</button>;
}
