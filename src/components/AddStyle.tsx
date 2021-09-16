import React from "react";

type StyleProps = {
  styles: React.CSSProperties;
};

export default function AddStyle(props: StyleProps) {
  return <div style={props.styles}>Hello I am from Styles</div>;
}
