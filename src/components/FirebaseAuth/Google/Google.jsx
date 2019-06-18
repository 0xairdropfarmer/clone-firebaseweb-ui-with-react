import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import facebookauth from "../assets/image/facebookauth.png";

class FacebookAuth extends Component {
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
    var provider = new firebase.auth.FacebookAuthProvider();
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
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>
          <img alt="facebookauth" src={facebookauth} />
        </button>
      </div>
    );
  }
}

export default FacebookAuth;
