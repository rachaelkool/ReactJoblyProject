import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../UserContext";


function NavBar({logout}) {
    const { currentUser } = useContext(UserContext);

    function loggedInNavBar() {
        return (
            <div>
                <div>
                    <NavLink to="/companies">
                    Companies
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/jobs">
                    Jobs
                    </NavLink>
                </div>
                <div>
                    <Link to="/" onClick={logout}>
                    Log Out {currentUser.username}
                    </Link>
                </div>
            </div>
        );
    }

    function loggedOutNavBar() {
        return (
            <div>
                <div>
                    <NavLink to="/login">
                    Login
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/signup">
                    Sign Up
                    </NavLink>
                </div>
            </div>
        );
    }

    return (
        <nav>
            <Link to="/">
            Jobly
            </Link>
            {currentUser ? loggedInNavBar() : loggedOutNavBar()}
        </nav>
    );
}


export default NavBar;