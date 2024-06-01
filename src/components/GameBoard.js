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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <Grid currentGuess={currentGuess} guessHistoryArr={guessHistoryArr} guessNumber={guessNumber} />
          <p> Here's a keypad to keep track of letters left with you</p>
          <Keypad keysUsed={keysUsed} />
        </div>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h1>Welcome to Wordingle!</h1>
          <p>Challenge your vocabulary and deduction skills with Wordingle, the ultimate word puzzle game!</p>
          
          <h2>How to Play:</h2>
          
                  <ul>
                    <li><b>Just Start Typing</b>: Simply start typing on your keyboard, and the words will appear in the grid.</li>
            <li><b>Guess the Word</b>: Enter your guess for the hidden five-letter word.</li>
            <li><b>Get Feedback</b>: Colors will guide you:
              <ul>
                <li ><b>Green</b>: Correct letter in the correct position.</li>
                <li ><b>Yellow</b>: Correct letter in the wrong position.</li>
                <li ><b>Grey</b>: Letter not in the word.</li>
              </ul>
            </li>
            <li><b>Solve the Puzzle</b>: Use the clues to guess the word within six attempts.</li>
          </ul>
          
          <h1>Can you master the words and become a Wordingle? Play now and find out!</h1>
        </div>

      </div>
      
      
      {IsmodalActive && <Modal isCorrect={isCorrect} guessNumber={guessNumber} words={ words} />}
    </div>
     
  )
}

export default GameBoard