import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ path, layout: PublicLayout, component: Component }) => {
  return (
    <Route exact path={path}>
      <PublicLayout>
        <Component />
      </PublicLayout>
    </Route>
  );
};

export default PublicRoute;
