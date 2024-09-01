import React, { useEffect, useState } from 'react';
import '../styles/scramble.css';

const words = [
    { word: 'exchange', hint: 'The act of trading' },
    { word: 'education', hint: 'The process of learning' },
    { word: 'technology', hint: 'The application of scientific knowledge' },
    { word: 'adventure', hint: 'An exciting experience' },
    { word: 'challenge', hint: 'A task that requires effort' },
    { word: 'computer', hint: 'A programmable electronic device' },
    { word: 'javascript', hint: 'A programming language for the web' },
    { word: 'react', hint: 'A JavaScript library for building user interfaces' },
    { word: 'developer', hint: 'A person who creates software' },
    { word: 'innovation', hint: 'The act of introducing new ideas' },
    { word: 'communication', hint: 'The act of exchanging information' },
    { word: 'design', hint: 'The process of creating something' },
    { word: 'algorithm', hint: 'A step-by-step procedure for calculations' },
    { word: 'framework', hint: 'A structure for building applications' },
    { word: 'optimization', hint: 'Making something as effective as possible' },
    { word: 'database', hint: 'A collection of organized data' },
    { word: 'security', hint: 'Protection against unauthorized access' },
    { word: 'network', hint: 'A group of interconnected devices' },
    { word: 'interface', hint: 'A point of interaction between components' },
    { word: 'virtual', hint: 'Existing in the digital world' },
];

function Scramble() {
    const [currentWord, setCurrentWord] = useState({});
    const [scrambledWord, setScrambledWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameOver, setGameOver] = useState(false);

    // Function to shuffle the letters of a word
    const shuffleWord = (word) => {
        const wordArray = word.split('');
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        return wordArray.join('');
    };

    // Function to pick a new word and set it as the current scrambled word
    const pickNewWord = () => {
        const newWord = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(newWord);
        setScrambledWord(shuffleWord(newWord.word));
        setUserInput('');
        setFeedback('');
        setAttempts(0);
        setTimeLeft(30);
        setGameOver(false);
    };

    // Function to handle user input changes
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Function to check if the user's guess is correct
    const checkGuess = () => {
        setAttempts(attempts + 1);
        if (userInput.toLowerCase() === currentWord.word.toLowerCase()) {
            setFeedback('Correct! Well done.');
            setGameOver(true);
        } else {
            setFeedback('Incorrect guess. Try again!');
        }
    };

    // Timer effect
    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setFeedback('Time is up! Better luck next time.');
            setGameOver(true);
        }
    }, [timeLeft, gameOver]);

    // Start the game with a random word when the component mounts
    useEffect(() => {
        pickNewWord();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="app-container">
            <h1>Word Scramble</h1>
            <div className="scramble-box">
                <h2>{scrambledWord}</h2>
                <p>Hint: {currentWord.hint}</p>
                <p>Time Left: {timeLeft}s</p>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Enter a valid word"
                    disabled={gameOver}
                />
                <div className="button-container">
                    <button onClick={pickNewWord} disabled={timeLeft === 0}>
                        Refresh Word
                    </button>
                    <button onClick={checkGuess} disabled={gameOver}>
                        Check Word
                    </button>
                </div>
                <p>{feedback}</p>
                <p>Attempts: {attempts}</p>
            </div>
        </div>
    );
}

export default Scramble;
