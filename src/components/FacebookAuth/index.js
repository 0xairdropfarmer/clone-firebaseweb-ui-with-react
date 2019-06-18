import React, { Component } from "react";
import FacebookAuth from "./FacebookAuth";

class FirebaseAuth extends Component {
  render() {
    return <FacebookAuth config={this.props.config} />;
  }
}

export default FirebaseAuth;
