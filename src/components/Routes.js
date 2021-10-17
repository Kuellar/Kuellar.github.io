import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import { BasicLayout } from "./layout/BasicLayout";
import LoadingPage from "../pages/LoadingPage";

const LandingPage = React.lazy(() => import("../pages/LandingPage"));

export const Routes = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Switch>
        <PublicRoute layout={BasicLayout} path="/" component={LandingPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </React.Suspense>
  );
};
