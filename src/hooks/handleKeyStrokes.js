import { useState } from "react"

export const HandleKeyStrokes = (words) => {
    
    const [guessNumber, setGuessNumber] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guessHistoryArr, setGuessHistoryArr] = useState([...Array(6)]) // each guess will be stored as array
    const [guessHistoryString, setGuessHistoryString] = useState([]) // each guess will be stored as string
    const [isCorrect, setIsCorrect] = useState(false);
    const [keysUsed, setKeysUsed] = useState({})

    // Format each guess into an array of letter objects
    const formatGuess = () => {
        let wordArr = [...words];
        let formattedGuessArr = [...currentGuess].map((letter) => {
            return { key: letter, color: "grey" }
        });
        
        formattedGuessArr.forEach((letter, i) => {
            if (wordArr[i] === letter.key) {
                formattedGuessArr[i].color = "green";
                wordArr[i] = null;
            }
        });

        formattedGuessArr.forEach((letter, i) => {
            if (wordArr.includes(letter.key) && letter.color !== 'green') {
                formattedGuessArr[i].color = "yellow";
                wordArr[wordArr.indexOf(letter.key)] = null;
            }
        });

        return formattedGuessArr;
    };

    const addNewGuess = (formattedGuessArr) => {
        if (currentGuess === words) {
            setIsCorrect(true);
        }

        setGuessHistoryArr((prevGuesses) => {
            let newGuess = [...prevGuesses];
            newGuess[guessNumber] = formattedGuessArr;
            return newGuess;
        });

        setGuessHistoryString((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        setGuessNumber((prevNumber) => prevNumber + 1);
        setKeysUsed((prevUsedKeys) => {
            let newKeys = { ...prevUsedKeys };
            formattedGuessArr.forEach((l) => {
                const currcolor = newKeys[l.key]

                if (l.color === 'green') {
                    newKeys[l.key] = 'green'
                    return
                }
                if (l.color === 'yellow' && currcolor !=='green') {
                    newKeys[l.key] = 'yellow'
                    return
                }
                if (l.color === 'grey' && currcolor !=='green' && currcolor !=='yellow') {
                    newKeys[l.key] = 'grey'
                    return
                }
            })
            return newKeys;
        })
        setCurrentGuess(''); 
    };

    const handleKeyUp = ({ key }) => {
        if (key === 'Enter') {
            if (guessNumber > 5) {
                console.log("You used all your guesses!");
                return;
            }

            if (guessHistoryString.includes(currentGuess)) {
                console.log("You already tried that word.");
                return;
            }

            if (currentGuess.length !== 5) {
                console.log("Word must be 5 characters long.");
                return;
            }

            let intermediateAnswer = formatGuess();
            addNewGuess(intermediateAnswer);
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key);
            }
        }
    };

    return { guessNumber, currentGuess, guessHistoryArr, isCorrect,keysUsed, handleKeyUp };
};
