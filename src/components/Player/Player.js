import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/props/playerShape';
import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  setEditPlayerEvent = (e) => {
    const { setEditMode, setPlayerToEdit, player } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
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
            <button className="btn btn-success" onClick={this.setEditPlayerEvent}>Edit Player</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
