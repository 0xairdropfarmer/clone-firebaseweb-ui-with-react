import React, { Component } from "react";
import FacebookAuth from "./FacebookAuth";
const config = {
  apiKey: "AIzaSyCOPzzXfS9ZWlPCijHlKFJ4hTgOEHnV4bc",
  authDomain: "mutiauthdemo.firebaseapp.com",
  databaseURL: "https://mutiauthdemo.firebaseio.com",
  projectId: "mutiauthdemo",
  storageBucket: "mutiauthdemo.appspot.com",
  messagingSenderId: "140177169073",
  appId: "1:140177169073:web:0da722ad382be09e",
};
class FirebaseAuth extends Component {
  render() {
    return <FacebookAuth config={config} />;
  }
}

export default FirebaseAuth;
