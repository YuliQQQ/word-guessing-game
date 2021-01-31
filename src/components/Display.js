import React from 'react';

import DisplayWord from './DisplayWord';
import DisplayDefinition from './DisplayDefinition';

const Display = ({ word, correctLetters, definition }) => (
  <div>
    <DisplayWord 
      word={word} 
      correctLetters={correctLetters}
    />
    <DisplayDefinition
      definition={definition}
    />
  </div>
);

export default Display;

