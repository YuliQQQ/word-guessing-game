import React from 'react';

const WrongGuessedLetters = (props) => (
  <div>
    {
      props.wrongGuessedLetters.length > 0 && <h3 className="wrong-guesses">Wrong: {props.wrongGuessedLetters}</h3>
    }
  </div>
);

export default WrongGuessedLetters;