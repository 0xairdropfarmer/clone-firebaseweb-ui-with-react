import React, { Component } from "react";
import YahooAuth from "./YahooAuth";

class index extends Component {
  render() {
    return <YahooAuth config={this.props.config} />;
  }
}

export default index;
