import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Placeholder from "../Placeholder";


function Routes() {

    return (
        <div>
            <Switch>

            <Route exact path="/">
                <Placeholder />
            </Route>

            <Route exact path="/login">
                <Placeholder />
            </Route>

            <Route exact path="/signup">
                <Placeholder />
            </Route>

            <Route exact path="/companies">
                <Placeholder />
            </Route>

            <Route exact path="/jobs">
                <Placeholder />
            </Route>

            <Route exact path="/companies/:handle">
                <Placeholder />
            </Route>

            <Route path="/profile">
                <Placeholder />
            </Route>

            <Redirect to="/" />
            </Switch>
        </div>
    );
}


export default Routes;
