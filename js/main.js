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
const buttons = document.querySelectorAll(".keyboard");
console.log(buttons);

const letters = document.querySelectorAll(".letters");
console.log(letters);



const wordDisplay = document.querySelector(".placeholder");
console.log(wordDisplay);

//  wordDisplay.innerText = (ltr0 + ltr1 + ltr2 + ltr3 + ltr4 + ltr5 + ltr6);


const chooseWord = document.querySelector(".choose-word");
console.log(chooseWord);



const wordChoices = [
    'BURRITO',
    'MUFFINS',
    'POPCORN',
    'LASANGA',
    'ALMONDS',
    'HOTDOGS',
    'GRANOLA',
    'BANANAS',
    'CUPCAKE',
    'COCONUT',
];
//an array of your 10 words to guess.





//MAX_GUESSES — (optional) how many wrong guesses are allowed.


                                    /*----- state variables -----*/

 let selectWord 
 let correctGuesses
 let wrongGuesses
 let gameOver = false;
 let maxGuesses = 10;

//  let ltr0 = "_";

//  let ltr1 = "_";

//  let ltr2 = "_";

//  let ltr3 = "_";

//  let ltr4 = "_";

//  let ltr5 = "_";
//  let ltr6 = "_";

 

// secretWord — the current word the player is trying to guess.

//  guessedLetters — an array of letters the player has guessed.

//  wrongGuesses — a counter for incorrect guesses.

//  gameOver — boolean for if the game has ended.
                                    /*----- cached elements  -----*/

// keyboardButtons — all the letter buttons(you can grab them all at once).

// wordDisplay — the part of the page showing underscores and letters.

// messageEl — where you display messages like "You won!" or "Game Over."

// resetButton — a button to reset / restart the game.




selectWord = getRandomWord(wordChoices);
console.log(selectWord);






/*----- event listeners -----*/
//  if (oper === "") {
//    num1 += value;
//    display.innerText = num1;
//  } else {
//    num2 += value;
//    display.innerText += value;
//  }

//LETTERS SHOW UP IN CONSOLE LOG WHEN CLICKED!!! 
chooseWord.addEventListener("click", getStarted);

// ---original
// function getStarted() {
//     wordDisplay.replaceChildren()
// selectWord = getRandomWord(wordChoices);
//     const selectedWordArray = selectWord.split('');
//     console.log(selectedWordArray);
    
//     selectedWordArray.forEach((ltr) => {
//         console.log(ltr);
//     const ltrContainer = document.createElement("div");
//     ltrContainer.innerText = "_";
//     wordDisplay.appendChild(ltrContainer);
//    })

//    console.log(wordDisplay);

//   console.log(selectWord.toUpperCase());
// };

// ---redo
function getStarted() {
  wordDisplay.innerText = ""; // Clear previous letters
  selectWord = getRandomWord(wordChoices);
  displayedLettersArray = Array(selectWord.length).fill("_"); // Initialize with underscores
  correctGuesses = [];
  wrongGuesses = [];
  gameOver = false;

  updateWordDisplay(); // Initial display

  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });

  console.log("Secret Word:", selectWord);
}

// function matchLetters() {
//   letters.forEach((letter) => {
//     const value = evt.target.innerText;
//     const targetLetters = wordDisplay.innerText;
//     console.log(value);
//     console.log(targetLetters);
//   });
// }
buttons.forEach((button) => {
  button.addEventListener("click", handleGuess);
});

chooseWord.addEventListener("click", getStarted);

// This code sets up an event listener so that when someone clicks a button or element called chooseWord, it runs the function getStarted() to begin a game (likely Hangman or a word guessing game).

// Step-by-step explanation of getStarted() function:
// wordDisplay.replaceChildren()

// This clears out anything currently displayed in the wordDisplay container — it's like wiping the screen clean to show a new word.

// selectWord = getRandomWord(wordChoices);

// This chooses a random word from a list called wordChoices and stores it in a variable called selectWord.

// const selectedWordArray = selectWord.split('');

// This splits the chosen word into an array of individual letters.
// For example, "apple" becomes ["a", "p", "p", "l", "e"].

// console.log(selectedWordArray);

// This prints the array of letters to the console for debugging purposes.

// Loop through each letter in the word:
// selectedWordArray.forEach((ltr) => {
//     ...
// })
// This runs a block of code for each letter in the word.

// Inside the loop:

// console.log(ltr);: shows each letter one by one in the console.

// const ltrContainer = document.createElement("div");: creates a new empty div element.

// ltrContainer.innerText = "_";: adds an underscore (“_”) to the div — this hides the actual letter, simulating a blank space the user will guess later.

// wordDisplay.appendChild(ltrContainer);: adds the new underscore div to the screen inside the wordDisplay container.

// console.log(wordDisplay);

// Logs the entire wordDisplay element to the console — helpful for debugging.

// console.log(selectWord.toUpperCase());

// Prints the full selected word in uppercase in the console — also for debugging or testing.

// letters.addEventListener("click", addLetters);

// function addLetters() {
//   console.log("hello");
  

  // console.log(selectWord);
  // console.log(wordDisplay.innerText);
  // // console.log(guessedLetter);
  // console.log(targetLetters);
  // console.log(underscores);
// };
letters.forEach((letter) => {
  letter.addEventListener("click", (evt) => {
  const underscores = wordDisplay.innerText;
  const guessedLetter = evt.target.innerText;
  const selectedWordArray = selectWord.split("");
   const ltrContainer = document.createElement("div");
  // const displayedWord =
    
      console.log(selectWord);
      console.log(underscores);
      console.log(guessedLetter);
     console.log(selectedWordArray);
     console.log(ltrContainer);
    
  if (selectWord.includes(evt.target.innerText)) {
      console.log(true);
      console.log(wordDisplay.innerText);
  } else {
    evt.target.disabled = true;
  }
//   
 selectWord.split('').forEach((letter, index) => {
  
 if (letter === guessedLetter)
{ltrContainer.innerText = guessedLetter;}
 });

    //  const arrays = wordChoices[].filter((elements) => {
    //    return elements === value;

    // const value = evt.target.innerText;
    // wordDisplay.innerText = value;
  });
});


// letters.forEach((letter) => {
//   letter.addEventListener("click", (evt) => {
//     const value = evt.target.innerText;
//     const targetLetters = selectWord.split("");
//     console.log(value);
//     console.log(targetLetters);
//   for (let i = 0; i < selectetWord.length; i++) {
//     if (selectWord[i] === value) {

//     };
//   }

    //  const arrays = wordChoices[].filter((elements) => {
    //    return elements === value;

    // const value = evt.target.innerText;
    // wordDisplay.innerText = value;
//   });
// });


// letters.forEach((letter) => {
//   letter.addEventListener("click", (evt) => {
//     console.log(selectWord);

//     const value = evt.target.innerText;
//     if (selectWord.includes(evt.target.innerText)) {
//      console.log(true); 
//     console.log(wordDisplay.innerText);
//   } else { evt.target.disabled = true;};

//      const arrays = wordChoices[].filter((elements) => {
//        return elements === value;
    

//     const value = evt.target.innerText;
//     wordDisplay.innerText = value;
//   });
// });

// letters.forEach((letter) => {
//   letter.addEventListener("click", (evt) => {
  
//     const underscores = wordDisplay.innerText;
//     const guessedLetter = evt.target.innerText;
//     const targetLetters = selectWord.split("");
    
//     console.log(guessedLetter);
//     console.log(targetLetters);
//     console.log(underscores);

//if the guessed letter is included in the array . update the div content of the 
   
   
  

    //  const arrays = wordChoices[].filter((elements) => {
    //    return elements === value;

    // const value = evt.target.innerText;
    // wordDisplay.innerText = value;
//   });
// });


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
init();

function init(){
    getStarted();
 
};



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

function updateWordDisplay() {
  wordDisplay.innerText = displayedLettersArray.join(" "); // Join the array with spaces
}

function handleGuess(event) {
  if (gameOver) return;

  const guessedLetter = event.target.innerText.toUpperCase();
  event.target.disabled = true;

  if (selectWord.includes(guessedLetter)) {
    if (!correctGuesses.includes(guessedLetter)) {
      correctGuesses.push(guessedLetter);
      for (let i = 0; i < selectWord.length; i++) {
        if (selectWord[i] === guessedLetter) {
          displayedLettersArray[i] = guessedLetter;
        }
      }
      updateWordDisplay();

      if (!displayedLettersArray.includes("_")) {
        gameOver = true;
        console.log("You win!");
        // Handle win display
      }
      event.target.classList.add("correct");
    }
  } else {
    if (!wrongGuesses.includes(guessedLetter)) {
      wrongGuesses.push(guessedLetter);
      console.log("Wrong Guesses:", wrongGuesses);
      // Update hangman drawing or remaining guesses count here

      if (wrongGuesses.length >= maxGuesses) {
        gameOver = true;
        console.log("Game Over! The word was:", selectWord);
        updateWordDisplay(); // Show the underscores as they were
        // Optionally reveal the word:
        // wordDisplay.innerText = selectWord.split('').join(' ');
      }
      event.target.classList.add("incorrect");
    }
  }
}

// function getRandomWord(arr) {
//   return arr[Math.floor(Math.random() * arr.length)].toUpperCase();
// }




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

