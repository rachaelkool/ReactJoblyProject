import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";


function Homepage() {
    const { currentUser } = useContext(UserContext);

    return (
        <div>
            <h2>Jobly</h2>
            {currentUser ? <p> Welcome Back, {currentUser.username}!</p>: <p>Create an account or login in to view jobs!</p>}
        </div>
    );
}


export default Homepage;