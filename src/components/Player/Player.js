import React from 'react';
// import PropTypes from 'prop-types';
import playerShape from '../../helpers/props/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <img src={player.imageUrl} alt="pic"/>
            <h5 className="card-title">{player.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
