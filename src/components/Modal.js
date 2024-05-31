import React from 'react'

function Modal({isCorrect ,guessNumber, words}) {
  return (
    <div className='modal'>
          {isCorrect && (
            <div>
                  <h1>you win</h1>
                  <p className='solution'>the word was {words}</p>
                  <p>you found the solution in { guessNumber} turns</p>
            </div>
          )}
          {!isCorrect && (
            <div>
                  <h1>you exhausted your turns</h1>
                  <p className='solution'>the word was {words}</p>
                  <p>better luck next time</p>
            </div>
          )}
    </div>
  )
}

export default Modal