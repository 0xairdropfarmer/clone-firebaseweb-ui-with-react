import React, { Component } from "react";
import Facebook from "../FacebookAuth";
class FirebaseAuth extends Component {
  render() {
    return <Facebook config={this.props.config} />;
  }
}

export default FirebaseAuth;
