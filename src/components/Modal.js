import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Modal({ isCorrect, guessNumber, words }) {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className='modal'>
          {isCorrect ? (
            <div>
              <div className='flex'>
                <h1>Congratulations! You cracked it in {guessNumber} turn(s)!</h1>
                <Button variant="success" onClick={handleClose}>Close</Button>
              </div>
               
              <p className='solution'>The word was {words}</p>
              
            </div>
          ) : (
              <div>
                 <Button variant="success" onClick={handleClose}>Close</Button>
              <h1>Alas! The puzzle remains unsolved.</h1>
              <p className='solution'>The word was {words}</p>
              <p>Fear not! Fortunes may yet smile upon your next endeavor!</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Modal;
