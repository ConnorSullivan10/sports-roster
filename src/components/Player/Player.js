import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/props/playerShape';
import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="players col-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-danger delete-player" onClick={this.deletePlayerEvent}>X</button>
            <img id="player-pic" src={player.imageUrl} alt="pic"/>
            <h5 className="card-title">{player.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
