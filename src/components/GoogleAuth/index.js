import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";

class index extends Component {
  render() {
    return <GoogleAuth config={this.props.config} />;
  }
}

export default index;
