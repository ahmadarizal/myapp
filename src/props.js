import React from "react";

// Props Functional Component
const User = (props) => {
  return <h1>Hello, {props.name}, data nama diambil dengan cara props</h1>;
};

export default function salam() {
  return (
    <div>
      <User name="fikri" />
    </div>
  );
}
