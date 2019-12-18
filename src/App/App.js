import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Team from '../components/Team/Team';
import authData from '../helpers/data/authData';
import playerData from '../helpers/data/playerData';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    players: [],
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromTeam) => console.error({ errFromTeam }));
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
        this.getPlayers();
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  renderView = () => {
    const { authed } = this.state;
    if (!authed) {
      return (<Auth />);
    }
    return (<Team players={this.state.players}/>);
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        { this.renderView() }
      </div>
    );
  }
}

export default App;
