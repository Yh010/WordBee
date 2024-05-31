import { useState } from "react"

export const HandleKeyStrokes = ({words}) => {
    
    const [guessNumber, setGuessNumber] = useState(0);
    const [currentGuess, setcurrentGuess] = useState("");
    const [guessHistoryArr, setguessHistoryArr] = useState([]) //each guess will be stored as array
    const [guessHistoryString, setguessHistoryString] = useState([]) //each guess will be stored as String
    const [isCorrect, setIsCorrect] = useState(false);


    //format each guess into an array of letters

    const formatGuess = () => {
        console.log("reached here "+ {currentGuess})
    }

    const addNewGuess = () => {

    }
    const handleKeyUp = ({ key }) => {

        if (key === 'Enter') {
            if (guessNumber > 5) {
                console.log("used all of ur guesses")
                return
            }

            if (guessHistoryString.includes(currentGuess)) {
                console.log("word is already tried")
                return
            }

            if (currentGuess.length !== 5) {
                console.log("enter 5 letter word")
                return
            }

            formatGuess()
        }

        if (key === 'Backspace') {
            setcurrentGuess((prev) => {
               return prev.slice(0,-1)
            })
            return
       }
        
        if (/^[A-Za-z]$/.test(key)){
            if (currentGuess.length < 5) {
                setcurrentGuess((prev) => {
                    return prev + key;
                })
            }
        }
        
    };

    return {guessNumber,currentGuess,guessHistoryArr,isCorrect,handleKeyUp}
}

