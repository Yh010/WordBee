import React, { useEffect } from 'react'
import { HandleKeyStrokes } from '../hooks/handleKeyStrokes'
import Grid from './Grid';
import Keypad from './Keypad';

function GameBoard({ words }) {
    const { currentGuess, handleKeyUp,guessHistoryArr,isCorrect,guessNumber,keysUsed } = HandleKeyStrokes(words);

   useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        }
   }, [handleKeyUp]);
  
  useEffect(() => {
    console.log(guessHistoryArr,isCorrect,guessNumber)
  },[guessHistoryArr,isCorrect,guessNumber])
  return (
    <div>
        <div>
            solution word is :{words}       
        </div>
      <div>your current guess is : {currentGuess}</div>
      <Grid currentGuess={currentGuess} guessHistoryArr={guessHistoryArr} guessNumber={guessNumber} />
      <Keypad keysUsed={ keysUsed} />
    </div>
     
  )
}

export default GameBoard