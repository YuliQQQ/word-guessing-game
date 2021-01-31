import React from 'react';

const ButtonLetters = (props) => (
  <div className="alphabet">
    <button className="alphabet__letter A" onClick={props.handleButtonPress} disabled={props.disabled} name='A'>A</button>
    <button className="alphabet__letter B" onClick={props.handleButtonPress} disabled={props.disabled} name='B'>B</button>
    <button className="alphabet__letter C" onClick={props.handleButtonPress} disabled={props.disabled} name='C'>C</button>
    <button className="alphabet__letter D" onClick={props.handleButtonPress} disabled={props.disabled} name='D'>D</button>
    <button className="alphabet__letter E" onClick={props.handleButtonPress} disabled={props.disabled} name='E'>E</button>
    <button className="alphabet__letter F" onClick={props.handleButtonPress} disabled={props.disabled} name='F'>F</button>
    <button className="alphabet__letter G" onClick={props.handleButtonPress} disabled={props.disabled} name='G'>G</button>
    <button className="alphabet__letter H" onClick={props.handleButtonPress} disabled={props.disabled} name='H'>H</button>
    <button className="alphabet__letter I" onClick={props.handleButtonPress} disabled={props.disabled} name='I'>I</button>
    <button className="alphabet__letter J" onClick={props.handleButtonPress} disabled={props.disabled} name='J'>J</button>
    <button className="alphabet__letter K" onClick={props.handleButtonPress} disabled={props.disabled} name='K'>K</button>
    <button className="alphabet__letter L" onClick={props.handleButtonPress} disabled={props.disabled} name='L'>L</button>
    <button className="alphabet__letter M" onClick={props.handleButtonPress} disabled={props.disabled} name='M'>M</button>
    <button className="alphabet__letter N" onClick={props.handleButtonPress} disabled={props.disabled} name='N'>N</button>
    <button className="alphabet__letter O" onClick={props.handleButtonPress} disabled={props.disabled} name='O'>O</button>
    <button className="alphabet__letter P" onClick={props.handleButtonPress} disabled={props.disabled} name='P'>P</button>
    <button className="alphabet__letter Q" onClick={props.handleButtonPress} disabled={props.disabled} name='Q'>Q</button>
    <button className="alphabet__letter R" onClick={props.handleButtonPress} disabled={props.disabled} name='R'>R</button>
    <button className="alphabet__letter S" onClick={props.handleButtonPress} disabled={props.disabled} name='S'>S</button>
    <button className="alphabet__letter T" onClick={props.handleButtonPress} disabled={props.disabled} name='T'>T</button>
    <button className="alphabet__letter U" onClick={props.handleButtonPress} disabled={props.disabled} name='U'>U</button>
    <button className="alphabet__letter V" onClick={props.handleButtonPress} disabled={props.disabled} name='V'>V</button>
    <button className="alphabet__letter W" onClick={props.handleButtonPress} disabled={props.disabled} name='W'>W</button>
    <button className="alphabet__letter X" onClick={props.handleButtonPress} disabled={props.disabled} name='X'>X</button>
    <button className="alphabet__letter Y" onClick={props.handleButtonPress} disabled={props.disabled} name='Y'>Y</button>
    <button className="alphabet__letter Z" onClick={props.handleButtonPress} disabled={props.disabled} name='Z'>Z</button>
    
  </div>
);

export default ButtonLetters;