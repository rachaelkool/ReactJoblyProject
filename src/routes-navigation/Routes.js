import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import Homepage from "../Homepage";
import ProtectedRoute from "../ProtectedRoute";
import EditProfileForm from "../EditProfileForm";


function Routes({ login, signup }) {

    return (
        <div>
            <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>

            <Route exact path="/login">
                <LoginForm login={login} />
            </Route>

            <Route exact path="/signup">
                <SignupForm signup={signup} />
            </Route>

            <ProtectedRoute exact path="/companies">
                <CompanyList />
            </ProtectedRoute>

            <ProtectedRoute exact path="/jobs">
                <JobList />
            </ProtectedRoute>

            <ProtectedRoute exact path="/companies/:handle">
                <CompanyDetail />
            </ProtectedRoute>

            <ProtectedRoute path="/profile">
                <EditProfileForm/>
            </ProtectedRoute>

            <Redirect to="/" />
            </Switch>
        </div>
    );
}


export default Routes;
