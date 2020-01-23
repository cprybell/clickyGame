import React from 'react';
import NavBar from './nav.js';
import JumboTron from './jumboTron.js';
import GameBoard from './gameBoard.js';
import './App.css';

class App extends React.Component {
  state = {
    currentScore: 0,
    highScore: 0,
    clickedImages: [],
    correct : null,
    initial : true
  };

  imageClick = (imageId) => {
    let tempArr = this.state.clickedImages;
    if (!tempArr.includes(imageId)) {
      tempArr.push(imageId)
      this.setState( {
        clickedImages : tempArr,
        currentScore : this.state.currentScore + 1,
        correct : true,
        initial : false
      } );
    }
    else {
      this.setState( {
        clickedImages : [],
        highScore : this.state.highScore < this.state.currentScore ? this.state.currentScore : this.state.highScore,
        currentScore : 0,
        correct : false,
        initial : false
      })
    }
  };

  render() { 
    return (
      <div className="main">
        <NavBar correct={this.state.correct} highScore={this.state.highScore} currentScore={this.state.currentScore} initial={this.state.initial}/>
        <JumboTron/>
        <div className="container">
          <GameBoard imgClick={this.imageClick}/>
        </div>
      </div>
    );
  };
}

export default App;
