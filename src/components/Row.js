import React from 'react'

function Row({ guess }) {
    
    if (guess) {
        return (
            <div className='Row Guesses'>
                {guess.map((letter,index) => (
                    <div key={index} className={letter.color}>
                        {letter.key}
                    </div>
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