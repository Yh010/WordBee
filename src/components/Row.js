import React from 'react'

function Row({ guess,currentGuess }) {
    
    if (guess) {
        return (
            <div className='Row OtherGuesses'>
                {guess.map((letter,index) => (
                    <div key={index} className={letter.color}>
                        {letter.key}
                    </div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('');
        return (
            <div className='Row currentGuess'>
                {letters.map((letter,index) => (
                    <div key={index} className='filled'>
                        {letter}
                    </div>
                ))}
                {[...Array(5 - letters.length)].map((_,i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

  return (
    <div className='Row'>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
    </div>
  )
}

export default Row