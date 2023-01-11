import React from "react";
import { Link } from "react-router-dom";


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