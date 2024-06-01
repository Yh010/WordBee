import React, { useEffect, useState } from 'react';
import wordsData from '../db/db.json';

export default function Keypad({keysUsed}) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    const lettersArr = wordsData.letters;
    setLetters(lettersArr);
    
  }, [])


  return (
    <div className="keypad">
      {console.log(letters)}
      {letters && letters.map(l => {
        const keycolor = keysUsed[l.key]
        console.log(keycolor)
        return (
          <div key={l.key} className={keycolor}>{l.key}</div>
        )
      })}
    </div>
  )
}