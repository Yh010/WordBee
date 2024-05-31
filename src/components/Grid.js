import React from 'react'
import Row from './Row'

function Grid({currentGuess,guessHistoryArr, guessNumber}) {
  return (
    <div>
          {guessHistoryArr.map((guess, index) => {
              if (index === guessNumber) {
                  return (<Row key={index} currentGuess={ currentGuess} />)
              }
              return (
                  <Row key={ index} guess= {guess} />
              )
         })} 
    </div>
  )
}

export default Grid