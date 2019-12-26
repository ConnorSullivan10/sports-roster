import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth d-flex flex-column">
        <button className="btn btn-danger" onClick={this.loginClickEvent}>Log In With Google</button>
        <span>
          <img className="auth-image" src="http://loodibee.com/wp-content/uploads/nfl-tennessee-titans-team-logo.png" alt=""/>
        </span>
      </div>
    );
  }
}

export default Auth;
