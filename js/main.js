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

const wordChoices = [
    ['B','U', 'R','R','I','T','O'], 
    ['M','U','F','F','I','N','S'], 
    ['P','O','P','C','O','R','N'], 
    ['L','A','S','A','N','G', 'A'], 
    ['A','L', 'M','O','N','D','S'], 
    ['H','O','T','D','O','G','S'], 
    ['G','R','A','N','O','L','A'],  
    ['B','A','N','A','N','A','S'], 
    ['C','U','P','C','A','K','E'],
    ['C','O','C','O','N','U','T']
];
//an array of your 10 words to guess.


const maxGuesses = 10;

console.log(maxGuesses);
//MAX_GUESSES — (optional) how many wrong guesses are allowed.


                                    /*----- state variables -----*/

 let secretWord 
 let correctGuesses
 let wrongGuesses
 let gameOver 

 let ltr0 = "_";

 let ltr1 = "_";

 let ltr2 = "_";

 let ltr3 = "_";

 let ltr4 = "_";

 let ltr5 = "_";
 let ltr6 = "_";

 
let oper = "";
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

 wordDisplay.innerText = (ltr0 + ltr1 + ltr2 + ltr3 + ltr4 + ltr5 + ltr6);


const chooseWord = document.querySelector(".choose-word");
console.log(chooseWord);

let selectWord = getRandomWord(wordChoices);






/*----- event listeners -----*/
//  if (oper === "") {
//    num1 += value;
//    display.innerText = num1;
//  } else {
//    num2 += value;
//    display.innerText += value;
//  }

//LETTERS SHOW UP IN CONSOLE LOG WHEN CLICKED!!! 
chooseWord.addEventListener("click", () => {
  let selectWord = getRandomWord(wordChoices);
  wordDisplay.innerText = ltr0 + ltr1 + ltr2 + ltr3 + ltr4 + ltr5 + ltr6;
  console.log(selectWord);
});


letters.forEach((letter) => {
  letter.addEventListener("click", (evt) => {
    console.log(selectWord);
    ltr1 = selectWord[0];
    ltr2 =selectWord[1];
    ltr3 =selectWord[2];
    ltr4 =selectWord[3];
    ltr5 =selectWord[4];
    ltr6 =selectWord[5];
    ltr7 =selectWord[6];
    
    // if (selectWord.includes(evt.target.innerText)) {
    //     console.log(selectWord);
    // };
    // const value = evt.target.innerText;
    // wordDisplay.innerText = value;
  });
});

// handle select letter



// for (let repeat = 1; repeat < 10; repeat++) {
//     wordDisplay.innerText = selectWord;
// }

// if there is a word then repeat the function


// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// for (let number = 1; number < 10; number++) {
//   console.log(number);
// }

// for (let day = 1; day <= 7; day++) {
//   console.log(`Day ${day} of the week`);
// }
/*----- functions -----*/



// init() — starts or resets the game.

// function init(
// ) 

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

  return array[Math.floor(Math.random() * array.length)];
}







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

