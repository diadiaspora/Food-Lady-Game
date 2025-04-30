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

const foodImages = document.querySelectorAll(".dissapearing-image");

const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
const img4 = document.getElementById("4");
const img5 = document.getElementById("5");
const img6 = document.getElementById("6");
const img7 = document.getElementById("7");
const img8 = document.getElementById("8");
const img9 = document.getElementById("9");
const img0 = document.getElementById("0");



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
 let maxGuesses = 10
 let guessesLeft
 let usedGuesses

/*----------------------------- Cashed Elements -----------------------------*/

const food = document.querySelectorAll(".dissapearing-image");

selectWord = getRandomWord(wordChoices);


wrongGuesses = [1, 2, 3, 3, 4, 5, 6, 7, 8,9, 10];
guessesLeft = maxGuesses - wrongGuesses.length;

/*-------------------------------- Functions --------------------------------*/




/*----------------------------- Event Listeners -----------------------------*/
function getStarted() {
  wordDisplay.innerText = "";
  selectWord = getRandomWord(wordChoices);
  displayedLettersArray = Array(selectWord.length).fill("_");
  correctGuesses = [];
  wrongGuesses = [];
  usedGuesses = 0;
  gameOver = false;

  updateWordDisplay(); 

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

// buttons.forEach((button) => {
//   button.addEventListener("click", gameOverNotification)
//   gameOverNotification();
// });


 chooseWord.addEventListener("click", getStarted);




letters.forEach((letter) => {
  letter.addEventListener("click", (evt) => {



    const underscores = wordDisplay.innerText;
    const guessedLetter = evt.target.innerText;
    const selectedWordArray = selectWord.split("");
    const ltrContainer = document.createElement("div");

  

if (selectWord.includes(evt.target.innerText)) {
  const underscores = wordDisplay.innerText;
  const guessedLetter = evt.target.innerText;
  const selectedWordArray = selectWord.split("");
  const ltrContainer = document.createElement("div");

  

  if (selectWord.includes(evt.target.innerText)) {
   
  } else {
    evt.target.disabled = true;
  }
  //
  selectWord.split("").forEach((letter, index) => {
    if (letter === guessedLetter) {
      ltrContainer.innerText = guessedLetter;
    }
  });
} else {
  evt.target.disabled = true;
}
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
    render();
  }


  function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


 function updateWordDisplay() {
   wordDisplay.innerText = displayedLettersArray.join(" ");
 }




function handleGuess(event) {


const guessedLetter = event.target.innerText;
const guessesLeft = maxGuesses - wrongGuesses.length -1 ;


  if (selectWord.includes(guessedLetter)) {
    console.log('Maximum Guesses=', maxGuesses);
    usedGuesses++;
    console.log("Correct Guesses =", usedGuesses);
    
   
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
      wrongGuesses.push(wrongGuesses);
       console.log("Maximum Guesses=", maxGuesses);
      console.log("Wrong Guesses:", wrongGuesses.length);
      console.log("Guesses Left =", guessesLeft);
      // Update hangman drawing or remaining guesses count here

 
      event.target.classList.add("incorrect");
    }
  }
}



function render(){
  renderImages()
}


function renderImages(){
foodImages.forEach((img, idx) => {
img.style.visibity = idx <= wrongGuesses.length ? 'visible' : 'hidden';
});
};

console.log(renderImages);




