import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = (props) => {
  const { postPerPage, total, pageinate } = props;
  // console.log(total,postPerPage,pageinate)
  const Pages = [];
  for (let i = 1; i <= Math.ceil(total / postPerPage); i++) {
    Pages.push(i);
  }
  // console.log(Pages);
  return (
    <nav>
      <ul className="pagination border-0">
        {Pages.map((num) => (
          <li key={num} className="page-item border-0" >
          <NavLink onClick={()=> pageinate(num)} className="page-link mx-1 border-0">
            {num}
          </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
