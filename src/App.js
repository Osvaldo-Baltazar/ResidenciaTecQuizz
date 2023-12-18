import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import authService from "./services/authService";
import Section from "./components/Section";
import Question from "./components/Question";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authService.getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/Section" component={Section} />
          <PrivateRoute path="/Question" component={Question} />
          priv
        </Switch>
      </div>
    </Router>
  );
};

export default App;
