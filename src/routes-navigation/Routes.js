import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Placeholder from "../Placeholder";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";


function Routes({ login, signup }) {

    return (
        <div>
            <Switch>

            <Route exact path="/">
                <Placeholder />
            </Route>

            <Route exact path="/login">
                <LoginForm login={login} />
            </Route>

            <Route exact path="/signup">
                <SignupForm signup={signup} />
            </Route>

            <Route exact path="/companies">
                <CompanyList />
            </Route>

            <Route exact path="/jobs">
                <JobList />
            </Route>

            <Route exact path="/companies/:handle">
                <CompanyDetail />
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
