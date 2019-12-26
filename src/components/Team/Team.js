import React from 'react';
import Player from '../Player/Player';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    editMode: false,
    playerToEdit: {},
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
      .catch((errorFromSavePlayer) => console.error({ errorFromSavePlayer }));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((errorFromUpdatePlayer) => console.error({ errorFromUpdatePlayer }));
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
  };

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  setHidePlayerForm = () => {
    this.setState({ showPlayerForm: false });
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  render() {
    return (
      <div className="Team">
        <button onClick={this.setShowPlayerForm}>Add a new player</button>
        { this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} setHidePlayerForm={this.setHidePlayerForm}/> }
        <div className="Team-cards d-flex flex-wrap">
          {this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit}/>))}
        </div>
      </div>
    );
  }
}

export default Team;
