import React from 'react';

import Header from './Header';
import Display from './Display';
import ButtonLetters from './ButtonLetters';
import Result from './Result';
import WrongGuessedLetters from './WrongGuessedLetters';

import randomWord from '../helpers/randomWord';
import letterInWord from '../helpers/letterInWord';
import alreadyGuessed from '../helpers/alreadyGuessed';

export default class Game extends React.Component
{  
  state = {
    word: randomWord(),
    correctGuessedLetters: [],
    wrongGuessedLetters: [],
    result: undefined,
    disabled: false,
    modal: false
  };

  handleButtonPress = (e) => {
    const letter = e.target.name;
    const combinedGuessedLetters = this.state.correctGuessedLetters.concat(this.state.wrongGuessedLetters);

    const { word, definition } = this.state.word;

    if(!alreadyGuessed(letter, combinedGuessedLetters))
    {
      if(letterInWord(letter, word))
      {
        this.setState((prevState) => ({ correctGuessedLetters: prevState.correctGuessedLetters.concat(letter) }), () => { this.handleResult() });
      }
      else
      {
        this.setState((prevState) => ({ wrongGuessedLetters: prevState.wrongGuessedLetters.concat(letter) }), () => { this.handleResult() });
      }    
    }   
  };

  handlePlayAgain = () => {
    this.setState(() => ({
      word: randomWord(),
      correctGuessedLetters: [],
      wrongGuessedLetters: [],
      result: undefined,
      disabled: false,
      modal: false
    }));
  };

  handleResult = () => {
    const { word, definition } = this.state.word;
    const wordArray = word.split('');

    if(this.state.wrongGuessedLetters.length === 3)
    {

      this.setState(() => ({ 
        result: 'lose',
        disabled: true,
        modal: true
      })); 
    }

    if(wordArray.every(letter => this.state.correctGuessedLetters.includes(letter)))
    {
      this.setState(() => ({ 
        result: 'win',
        disabled: true,
        modal: true
     }));
    }
  };


  render()
  {
    const { word, definition } = this.state.word;
    
    return (
      <div>
        <Header />
        <Display
          word={word}
          correctLetters={this.state.correctGuessedLetters}
          definition={definition}
        />
        <ButtonLetters 
          handleButtonPress={this.handleButtonPress}
          disabled={this.state.disabled}
        />
        <WrongGuessedLetters wrongGuessedLetters={this.state.wrongGuessedLetters} />
        <Result 
          result={this.state.result}
          handlePlayAgain={this.handlePlayAgain}
          modal={this.state.modal}
        />
      </div>
    );
  }
}