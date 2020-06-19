import React from 'react';
import './App.css';

import {ReactComponent as TableSVG} from '../src/Assets/9YD.svg';

import PlayerIcon from "./Components/player-icon/player-icon";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      numPlayers:0,
      playersArray:[]
    };
  }

  addPlayer = () => {
    const { numPlayers, playersArray } = this.state;
    playersArray.push({username: "test1", chipStack: 2000})
    this.setState({numPlayers: numPlayers+1, playersArray: playersArray});
  }

  removePlayer = () => {
    const { numPlayers, playersArray } = this.state;
    playersArray.pop()
    this.setState({numPlayers: numPlayers-1, playersArray: playersArray});
  }

  render(){
    return(
      <div className="App">
        Number of players: {this.state.numPlayers}
        <div className='table-div'>
          <TableSVG className='table'/>
          {
            this.state.playersArray.map((player, idx) => (
              <PlayerIcon username={player.username} chipStack={player.chipStack} key={idx} />
            ))
          }
          <button onClick={this.addPlayer}>Add Player</button>
          <button onClick={this.removePlayer}>Remove Player</button>
        </div>
      </div>
    )
  }
}

export default App;
