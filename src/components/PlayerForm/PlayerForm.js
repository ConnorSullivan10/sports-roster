import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
// import playerShape from '../../helpers/props/playerShape';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
  }

  savePlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      imageUrl: this.state.playerImageUrl,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ playerName: '', playerImageUrl: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  render() {
    return (
      <form className='col-6 offset-3 BoardForm'>
        <div className="form-group">
          <label htmlFor="order-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="board-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Player Image Url:</label>
          <input
            type="text"
            className="form-control"
            id="board-description"
            placeholder="Enter image URL"
            value={this.state.playerImageUrl}
            onChange={this.imageChange}
          />
        </div>
        (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>)
      </form>
    );
  }
}

export default PlayerForm;
