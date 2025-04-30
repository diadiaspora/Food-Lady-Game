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


const letters = document.querySelectorAll(".letters");

const wordDisplay = document.querySelector(".placeholder");

const chooseWord = document.querySelector(".choose-word");

const foodImages = document.querySelectorAll(".dissapearing-image");

const headerText = document.querySelector("main h2:first-child");

const headerTwo = document.querySelector(".h3");
console.log(headerTwo.innerText);

const imageSection = document.querySelector(".image-section"); 
const winGif = document.querySelector(".win-gif"); 
const loseImage = document.querySelector(".lose-image"); 




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
  renderImages();

  headerText.innerText = "What Should You Order Next?";
  headerTwo.innerText = "Take a Guess!";
   chooseWord.innerText = "Choose a Different Word";

   imageSection.style.display = "block"; 
   winGif.style.display = "none";
   loseImage.style.display = "none";

  letters.forEach((letter) => {
    letter.disabled = false;
    letter.classList.remove("correct", "incorrect");
  });

  console.log("Secret Word:", selectWord);
  console.log("Max Guesses:", maxGuesses);
}


letters.forEach((letter) => {
letter.addEventListener("click", handleGuess);
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

if (!gameOver) {
  event.target.disabled = true;

  if (selectWord.includes(guessedLetter)) {
    console.log("Maximum Guesses=", maxGuesses);
    usedGuesses++;
    console.log("Correct Guesses =", usedGuesses);
    headerText.innerText = "Great Guess, Keep Going!";
    headerTwo.innerText = `You have ${guessesLeft} guesses left`;

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
        headerText.innerText = "Congratulations, YOU ATE!";
        headerTwo.innerText = "Order Seconds!";
        chooseWord.innerText = "Play Again";
       
        letters.forEach((letter) => (letter.disabled = true));

         imageSection.style.display = "none";
         winGif.style.display = "block";
         loseImage.style.display = "none";
      }
      event.target.classList.add("correct");
    }
  } else {
    if (!wrongGuesses.includes(guessedLetter)) {
      wrongGuesses.push(guessedLetter);
      headerText.innerText = "Wrong, Try Again";
      headerTwo.innerText = `You have ${guessesLeft} guesses left`;
      console.log("Wrong Guesses:", wrongGuesses);

      renderImages();

      console.log("Maximum Guesses=", maxGuesses);
      console.log("Wrong Guesses:", wrongGuesses.length);
      console.log("Guesses Left =", guessesLeft);

      event.target.classList.add("incorrect");

      if (wrongGuesses.length >= maxGuesses) {
        gameOver = true;
        console.log("Game Over! The word was:", selectWord);
        updateWordDisplay();
        headerText.innerText = "Game Over!";
        headerTwo.innerText = "";
        chooseWord.innerText = "Play Again";
        letters.forEach((letter) => (letter.disabled = true));

          imageSection.style.display = "none";
          winGif.style.display = "none";
          loseImage.style.display = "block";
      }
    }
  }
}
}


function render(){
  renderImages()
}


function renderImages() {
  foodImages.forEach((img, idx) => {
    // Hide images based on the index being less than the number of wrong guesses
    img.style.visibility = idx < wrongGuesses.length ? "hidden" : "visible";
  });
}






