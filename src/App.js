import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import logo from './logo.svg';
import './App.css';

import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';



class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [ 
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'O',
      turn: 'X',
      winner: null
    }
  }
  updateBoard(loc, player) {
    if(this.state.gameBoard[loc] === 'X' || this.state.gameBoard[loc] === 'O' || this.state.winner){
      //Invalid Move
      return;
    }
    let currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    this.setState({gameBoard: currentGameBoard});

    let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
    if(topRow.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
     let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
    if(middleRow.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
    if(bottomRow.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
    if(leftCol.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
    if(middleCol.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
    if(rightCol.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let rightDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
    if(rightDiag.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let leftDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
    if(leftDiag.match(/XXX|000/)) {
      this.setState({winner: this.state.turn});
      return;
    }
    let moves = this.state.gameBoard.join(' ').replace(/ /g, '');
    if(moves.length === 9){
      this.setState({winner: 'd'});
    }
    this.setState({turn: (this.state.turn === 'X') ? 'O' : 'X'});
  }
  resetBoard() {
    this.setState({
      gameBoard: [ 
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'O',
      turn: 'X',
      winner: null
    })
  }

  render() {
    return (
      <div className="container">  
        <div className="menu">
          <h1>Tic Tac Toe</h1>
          <Announcement winner={this.state.winner}/>
          <ResetButton reset={this.resetBoard.bind(this)}/>
          </div>
          {this.state.gameBoard.map(function(value, i){
              return ( 
                <Tile
                  loc={i}
                  key={i}
                  value ={value}
                  updateBoard={this.updateBoard.bind(this)}
                  turn={this.state.turn} /> 
              )  
          }.bind(this))} 
            
               
      </div>
    );
  }
}

export default App;
