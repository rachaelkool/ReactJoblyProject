import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


function NavBar() {

  return (
      <nav>
        <Link to="/">
          Jobly
        </Link>
      </nav>
  );
}


export default NavBar;