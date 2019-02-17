import React, { Component } from 'react';
import './App.css';

import GuessWords from './GussedWords';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Guess word gamer</h1>
        <Congrats success={true}/>
        <GuessWords guessedWords={[
          {
            guessedWord: 'train',
            letterMatchCount: 3
          }
        ]}/>
      </div>
    );
  }
}

export default App;
