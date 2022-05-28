import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Projects from "../pages/Projects";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
}

export default Routes;
