import React, { useEffect, useState } from 'react'
import { HandleKeyStrokes } from '../hooks/handleKeyStrokes'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import Instructions from './Instructions';

function GameBoard({ words }) {
  const { currentGuess, handleKeyUp, guessHistoryArr, isCorrect, guessNumber, keysUsed } = HandleKeyStrokes(words);
  const [IsmodalActive, setModalActive] = useState(false);

   useEffect(() => {
     window.addEventListener("keyup", handleKeyUp);
     
     if (isCorrect) {
       console.log("winner")
       setTimeout(() => {
         setModalActive(true)
       },2000)
        window.removeEventListener("keyup", handleKeyUp); 
     }

     if (guessNumber > 5) {
       console.log("out of guesses")
       setTimeout(() => {
         setModalActive(true)
       },2000)
       window.removeEventListener("keyup", handleKeyUp); 
     }
      return () => {
        window.removeEventListener("keyup", handleKeyUp);
      }
   }, [handleKeyUp,isCorrect,guessNumber]);
  

  return (
    <div>
      <div>
        <p>Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. Here's how it goes:</p>
        <Instructions/>
        
        <p>Remaining attempts: { 6-guessNumber}</p>
        
        </div>
     {/*  <div>Your latest guess: {currentGuess}</div> */}
      <Grid currentGuess={currentGuess} guessHistoryArr={guessHistoryArr} guessNumber={guessNumber} />
      <p> Here's a keypad to keep track of letters left with you</p>
      <Keypad keysUsed={keysUsed} />
      {IsmodalActive && <Modal isCorrect={isCorrect} guessNumber={guessNumber} words={ words} />}
    </div>
     
  )
}

export default GameBoard