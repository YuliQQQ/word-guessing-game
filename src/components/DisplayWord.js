import React from 'react';

const DisplayWord = ({ word, correctLetters }) => (
  <div className="hidden-word">
    {
      word.split('').map((letter, index) => {
        return (
          <span className="hidden-word__letter" key={index}>
            {correctLetters.includes(letter) ? letter : '_'}
          </span>
        )
      })
    }
  </div>
);

export default DisplayWord;