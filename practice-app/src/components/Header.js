import React from "react";

const Header = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
      <button>Add</button>
    </header>
  )
};

export default Header;
