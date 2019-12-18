import React from 'react';
// import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';
import Player from '../Player/Player';

class Team extends React.Component {
  state = {
    players: [],
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

  render() {
    return (
      <div>
        {this.state.players.map((player) => (<Player key={player.id} player={player} />))}
      </div>
    );
  }
}

export default Team;
