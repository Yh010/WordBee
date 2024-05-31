import React from 'react'
import Row from './Row'

function Grid({currentGuess,guessHistoryArr, guessNumber}) {
  return (
    <div>
          {guessHistoryArr.map((guess,index) => {
              return (
                  <Row key={ index} guess= {guess} />
              )
         })} 
    </div>
  )
}

export default Grid