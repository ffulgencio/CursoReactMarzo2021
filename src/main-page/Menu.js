import React from "react";
import Option from "./option"

const Menu = function (props) {
  return (
    <ul>
      {props.options.map((op) => (
        <Option  key={op} option={op} onDelete={ props.handleDelete } />
      ))}
    </ul>
  );
};

export default Menu;
