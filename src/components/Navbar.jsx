import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex flex-row justify-evenly">
      <Link to="/">Home</Link>
      <Link to="/basket">Basket</Link>
    </div>
  );
};

export default Navbar;
