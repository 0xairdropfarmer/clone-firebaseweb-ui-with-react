import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mailandpass from "../assets/image/mailandpass.png";
import Login from "./Login";
class EmailAndPass extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/login-with-email">
            <img alt="mail" src={mailandpass} />
          </Link>
          <Route path="/login-with-email" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default EmailAndPass;
