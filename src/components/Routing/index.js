import React, { Suspense } from "react";
import { ROUTES } from "../../config/routes";
import { Switch, Redirect, Route } from "react-router-dom";
import Loading from "../../shared/Loading";

function Waiting(Component) {
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}

const Routing = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/delivery" />
      {ROUTES.map(({ path, component }, key) => (
        <Route key={key} exact path={path} component={Waiting(component)} />
      ))}
    </Switch>
  );
};

export default Routing;
