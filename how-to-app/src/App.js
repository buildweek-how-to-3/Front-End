import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import Login from "./components/Login";
import { useLocation, useParams, useHistory } from "react-router-dom";
import signupForm from "./signupForm";
import Form from "./loginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> My How To App</h1>

        <ul>
          <li>
            <Link to="/register">Register</Link>
            <Link to="/Form">Start Here - Login Here</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        {/* Split */}
        {/* <Route path="/login" component={Login} />{" "} */}
        <Switch>
          <PrivateRoute
            exact
            path="/dashboard/"
            component={Dashboard}
            
          ></PrivateRoute>
          {/* <PrivateRoute path="/add-note" component={AddNote}></PrivateRoute> */}
          <Route path="/register" component={Register} />{" "}
          <Route path="/Form" component={Form} />{" "}
          <Route path="/login" component={Login} />{" "}
        </Switch>
        {/* Split */}
      </div>
    </Router>
  );
}

export default App;
