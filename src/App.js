import React, { Component } from "react";
import Scanner from "./views/Scanner";
import Viewer from "./views/Viewer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Scanner} />
          <Route path="/viewer" component={Viewer} />
        </div>
      </Router>
    );
  }
}

export default App;
