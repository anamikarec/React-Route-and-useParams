import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { UserPage } from "../pages/UserPage";
import { Users } from "../pages/Users";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {" "}
          <h3>Home Page</h3>{" "}
        </Route>

        <Route path="/about" exact>
          {" "}
          <h3>About Page</h3>{" "}
        </Route>
        <Route path="/users" exact>
          {" "}
          <Users />
        </Route>

        <Route path="/users/:id" exact>
          {" "}
          <UserPage />
        </Route>
        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </>
  );
};

export { AllRoutes };
