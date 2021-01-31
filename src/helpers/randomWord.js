import json from '../words/words.json';

const randomWord = () => {
  let data = json;
  const randomNum = Math.floor(Math.random() * data.length);
  const word = data[randomNum];

  return word;
}; 

export default randomWord;