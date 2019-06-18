import React, { Component } from "react";
import TwitterAuth from "./TwitterAuth";

class index extends Component {
  render() {
    return <TwitterAuth config={this.props.config} />;
  }
}

export default index;
