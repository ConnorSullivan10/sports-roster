import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <span className="navbar-brand" href="#">
            <img className="nav-logo" src="https://www.nflalumni.org/wp-content/uploads/2017/10/Tennessee_Titans_logo.svg_.png" alt=""/>
          </span>
          <span className="navbar-brand nav-text" href="#">Titans Roster</span>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
              { authed && <button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
