import React, { Component } from "react";
import loading from "../loading.svg";

class Loading extends Component {
  render() {
    return (
      <div className="loading-wrapper">
        <img className="loading-icon" src={loading} alt="Loading..." />
      </div>
    );
  }
}

export default Loading;
