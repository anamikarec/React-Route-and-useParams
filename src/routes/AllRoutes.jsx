import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { UserPage } from "../pages/UserPage";
import { Users } from "../pages/Users";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export { AllRoutes };
