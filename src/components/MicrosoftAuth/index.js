import React, { Component } from "react";
import MicrosoftAuth from "./MicrosoftAuth";

class index extends Component {
  render() {
    return <MicrosoftAuth config={this.props.config} />;
  }
}

export default index;
