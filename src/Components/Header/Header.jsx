import React from "react";
import "../../CSS/style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header ">
        <div className="header__title">
          <h1>Title</h1>
        </div>
        <div className="header__link">
          <ul>
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="categories">Category</NavLink>
            </li>
            <li>
              <NavLink to="Products">Products</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
