import React, { useEffect } from 'react'
import { HandleKeyStrokes } from '../hooks/handleKeyStrokes'

function GameBoard({ words }) {
    const { currentGuess, handleKeyUp } = HandleKeyStrokes(words);

   useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keyup", handleKeyUp);
        }
    }, [handleKeyUp]);
  return (
    <div>
        <div>
            solution word is :{words}       
        </div>
        <div>your current guess is : {currentGuess}</div>
    </div>
     
  )
}

export default GameBoard