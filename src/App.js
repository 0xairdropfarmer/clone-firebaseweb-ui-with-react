import React, { Component } from "react";
import "./App.css";
import FacebookAuth from "./components/FacebookAuth";
import GithubAuth from "./components/GithubAuth";
import GoogleAuth from "./components/GoogleAuth";
import MicrosoftAuth from "./components/MicrosoftAuth";
import TwitterAuth from "./components/TwitterAuth";
import YahooAuth from "./components/YahooAuth";
const config = {
  apiKey: "xxxxxxxxxxx",
  authDomain: "xxxxxxxxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxx",
  appId: "1:14017xxxxxxxxxxx382be09e",
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <FacebookAuth config={config} />
        <GoogleAuth config={config} />
        <GithubAuth config={config} />
        <MicrosoftAuth config={config} />
        <TwitterAuth config={config} />
        <YahooAuth config={config} />
      </div>
    );
  }
}

export default App;
