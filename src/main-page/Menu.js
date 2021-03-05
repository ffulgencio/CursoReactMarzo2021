import React from "react";

const Menu = function (props) {
  return (
    <ul>
      {props.options.map((op) => (
        <li>{op} </li>
      ))}
    </ul>
  );
};

export default Menu;
