import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { About } from "../About/About";
import { Management } from "../Management/Management";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul className="menu-bar">
              <li className="menu-element">
                <Link to="/">Management</Link>
              </li>
              <li className="menu-element">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Management} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}
