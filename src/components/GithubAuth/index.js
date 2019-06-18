import React, { Component } from "react";
import GithubAuth from "./GithubAuth";

class index extends Component {
  render() {
    return <GithubAuth config={this.props.config} />;
  }
}

export default index;
