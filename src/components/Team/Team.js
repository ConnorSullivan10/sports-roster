import React from 'react';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    showPlayerForm: false,
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromTeam) => console.error({ errFromTeam }));
  }

  addPlayer = (newPlayer) => {
    playerData.saveNewPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((errorFromSaveBoard) => console.error({ errorFromSaveBoard }));
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  render() {
    return (
      <div className="Team">
        <button onClick={this.setShowPlayerForm}>Add a new player</button>
        { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} /> }
        <div className="Team-cards d-flex flex-wrap">
          {this.state.players.map((player) => (<Player key={player.id} player={player} />))}
        </div>
      </div>
    );
  }
}

export default Team;
