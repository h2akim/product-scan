import React, { Component } from "react";
import * as qs from "query-string";
import "../App.css";

class Viewer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">Viewer</div>
      </div>
    );
  }
}

export default Viewer;
