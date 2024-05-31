import React, { useEffect, useState } from 'react'
import { HandleKeyStrokes } from '../hooks/handleKeyStrokes'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

function GameBoard({ words }) {
  const { currentGuess, handleKeyUp, guessHistoryArr, isCorrect, guessNumber, keysUsed } = HandleKeyStrokes(words);
  const [IsmodalActive, setModalActive] = useState(false);

   useEffect(() => {
     window.addEventListener("keyup", handleKeyUp);
     
     if (isCorrect) {
       console.log("winner")
       setTimeout(() => {
         setModalActive(true)
       },3000)
        window.removeEventListener("keyup", handleKeyUp); 
     }

     if (guessNumber > 5) {
       console.log("out of guesses")
       setTimeout(() => {
         setModalActive(true)
       },3000)
       window.removeEventListener("keyup", handleKeyUp); 
     }
      return () => {
        window.removeEventListener("keyup", handleKeyUp);
      }
   }, [handleKeyUp,isCorrect,guessNumber]);
  

  return (
    <div>
        <div>
            solution word is :{words}       
        </div>
      <div>your current guess is : {currentGuess}</div>
      <Grid currentGuess={currentGuess} guessHistoryArr={guessHistoryArr} guessNumber={guessNumber} />
      <Keypad keysUsed={keysUsed} />
      {IsmodalActive && <Modal isCorrect={isCorrect} guessNumber={guessNumber} words={ words} />}
    </div>
     
  )
}

export default GameBoard