import React from 'react';
import ReactModal from 'react-modal'

const Result = ({ result, handlePlayAgain, modal }) => (
  <ReactModal 
    isOpen={modal}
    contentLabel="onRequestClose Example"
    ariaHideApp={false}
    className="Modal"
    overlayClassName="Overlay"
  >
    <div>
      {
        result === 'win' && <h1>You Won</h1>
      }

      {
        result === 'lose' && <h1>You lose</h1>
      }

      {
        result !== undefined && <button onClick={handlePlayAgain} >
        Play Again
      </button>
      }
    </div>
  </ReactModal>
);

export default Result;

// const Result = (props) => (
//   <div className="result">
//       {
//         props.result === 'win' && <h1>You Won</h1>
//       }

//       {
//         props.result === 'lose' && <h1>You lose</h1>
//       }

//       {
//         props.result !== undefined && <button onClick={props.handlePlayAgain} >
//         Play Again
//       </button>
//       }
   
    
//   </div>
// );