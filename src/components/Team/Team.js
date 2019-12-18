import React from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';
import playerShape from '../../helpers/props/playerShape';

class Team extends React.Component {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape.playerShape),
  }

  render() {
    const myPlayers = this.props.players;
    const playerCards = myPlayers.map((player) => <Player key={player.id} player={player} />);
    return (
      <div>
        {playerCards}
      </div>
    );
  }
}

export default Team;
