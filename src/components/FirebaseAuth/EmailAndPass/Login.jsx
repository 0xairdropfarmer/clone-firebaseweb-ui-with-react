import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCOPzzXfS9ZWlPCijHlKFJ4hTgOEHnV4bc",
  authDomain: "mutiauthdemo.firebaseapp.com",
  databaseURL: "https://mutiauthdemo.firebaseio.com",
  projectId: "mutiauthdemo",
  storageBucket: "mutiauthdemo.appspot.com",
  messagingSenderId: "140177169073",
  appId: "1:140177169073:web:0da722ad382be09e",
};
class EmailAndPass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      currentUser: null,
      message: "",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSignIn = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user,
        });
        console.log(this.state.currentUser);
      })
      .catch(error => {
        this.setState({
          message: error.message,
        });
      });
  };
  onSignUp = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user,
        });
        console.log(this.state.currentUser);
      })
      .catch(error => {
        this.setState({
          message: error.message,
        });
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <form action="" autocomplete="off">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <button
                    type="button"
                    id="sendlogin"
                    className="btn btn-primary"
                  >
                    login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailAndPass;
