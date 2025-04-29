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


/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".keyboard");

const letters = document.querySelectorAll(".letters");

const wordDisplay = document.querySelector(".placeholder");

const chooseWord = document.querySelector(".choose-word");

const dissapearingImages = document.querySelectorAll("dissapearing-image");

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
/*-------------------------------- Variables --------------------------------*/
// State Variables

 let selectWord 
 let displayedLettersArray = [];
 let correctGuesses = [];
 let wrongGuesses = [];
 let gameOver = false;
 let maxGuesses = dissapearingImages.length; 

/*----------------------------- Cashed Elements -----------------------------*/


selectWord = getRandomWord(wordChoices);
console.log(selectWord);


/*-------------------------------- Functions --------------------------------*/




/*----------------------------- Event Listeners -----------------------------*/
function getStarted() {
  wordDisplay.innerText = "";
  selectWord = getRandomWord(wordChoices);
  displayedLettersArray = Array(selectWord.length).fill("_");
  correctGuesses = [];
  wrongGuesses = [];
  gameOver = false;

  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });

  console.log("Secret Word:", selectWord);
  console.log("Max Guesses:", maxGuesses);
}


buttons.forEach((button) => {
  button.addEventListener("click", handleGuess);
});

 chooseWord.addEventListener("click", getStarted);

letters.forEach((letter) => {
  letter.addEventListener("click", (evt) => {
    const underscores = wordDisplay.innerText;
    const guessedLetter = evt.target.innerText;
    const selectedWordArray = selectWord.split("");
    const ltrContainer = document.createElement("div");

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
    selectWord.split("").forEach((letter, index) => {
      if (letter === guessedLetter) {
        ltrContainer.innerText = guessedLetter;
      }
    });
  });
});


  /*-------------------------------- Functions --------------------------------*/

  init();

  function init() {
    
    updateWordDisplay();
    getStarted();
  }


  function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


 function updateWordDisplay() {
   wordDisplay.innerText = displayedLettersArray.join(" ");
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




