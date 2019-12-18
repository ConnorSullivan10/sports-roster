import React from 'react';
import playerShape from '../../helpers/props/playerShape';
import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="players col-4">
        <div className="card">
          <div className="card-body">
            <img id="player-pic" src={player.imageUrl} alt="pic"/>
            <h5 className="card-title">{player.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
