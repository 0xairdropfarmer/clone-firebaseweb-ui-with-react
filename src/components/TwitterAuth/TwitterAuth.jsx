import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import twitter_auth from "./assets/image/twitter_auth.png";

class TwitterAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      currentUser: null,
      message: "",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(this.props.config);
    }
  }
  handleLogin() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);

        // ...
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>
          <img alt="twitter_auth" src={twitter_auth} />
        </button>
      </div>
    );
  }
}

export default TwitterAuth;
