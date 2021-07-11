import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(
  <Router>
    {routes
      ? routes.map(route => {
          const { exact, path, component, key } = route;
          const RoutedComponent = component;
          return (
            <Route
              exact={exact}
              path={path}
              key={key}
              render={props => <RoutedComponent {...props}/>}
            />
          );
        })
      : null}
  </Router>,
  document.getElementById("root")
);
