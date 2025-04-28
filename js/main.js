                                    /*----- psuedocode -----*/
/* 
- choose random word for game 
- Display empty word placeholder that needs to be guessed
- Player can click on keyboard letters to add to placeholder.
- Correct letter is added to placeholder.
- Disable wrong letter on keyboard
- Food item taken from plate with wrong letter guess.
- Player is given a 'win' message when all placeholder for letters are filled.
- Player given a lose message when all food is gone from plate
- Choose different word button if game is unfinished.
- Reset game button when gave is finished.
- circulate new word for each new game
*\


                                /*----- constants -----*/

const letters = document.querySelectorAll(".letters");
console.log(letters);

const wordChoices = ['pineapple', 'barbeque', 'cheesecake', 'lasagna', 'pepperoni', 'cucumber', 
'granola', 'bananas', 'strawberries', 'sandwich'
];
//an array of your 10 words to guess.
console.log(wordChoices);

const maxGuesses = 10;

console.log(maxGuesses);
//MAX_GUESSES — (optional) how many wrong guesses are allowed.


                                    /*----- state variables -----*/

 let secretWord 
 let correctGuesses
 let wrongGuesses
 let gameOver 

// secretWord — the current word the player is trying to guess.

//  guessedLetters — an array of letters the player has guessed.

//  wrongGuesses — a counter for incorrect guesses.

//  gameOver — boolean for if the game has ended.
                                    /*----- cached elements  -----*/

// keyboardButtons — all the letter buttons(you can grab them all at once).

// wordDisplay — the part of the page showing underscores and letters.

// messageEl — where you display messages like "You won!" or "Game Over."

// resetButton — a button to reset / restart the game.


const buttons = document.querySelectorAll(".keyboard");
console.log(buttons);

const wordDisplay = document.querySelector(".placeholder");


const choose = document.querySelector(".choose-word");



/*----- event listeners -----*/

//LETTERS SHOW UP IN CONSOLE LOG WHEN CLICKED!!! 

letters.forEach((letter) => {
    letter.addEventListener("click", (typing) => {
       const typedLetter = typing.target.innerText;
       console.log(typedLetter);
    });
});




/*----- functions -----*/

// init() — starts or resets the game.

// renderWord() — updates the underscores and guessed letters in the UI.

// handleGuess(letter) — main logic when a letter button is clicked:

// Check if the letter is in the word.

// Update guessedLetters.

// Update the display.

// Disable the button.

// Check win / loss conditions.

//     checkWin() — checks if all letters have been guessed.

//         checkLoss() — (optional, if using max wrong guesses).

// disableButton(button) — disables a letter button after clicking.




function getRandomWord(array) {
  console.log(array);
  return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandomWord(wordChoices));
getRandomWord(wordChoices);

// function namey(one, two) {
//     return one + two
// };

// namey(1,2);

// init()

// function init() { 
//     secretWord = getRandomWord(wordChoices);

// render();
// };

// console.log(init);