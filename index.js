//User input
const guessInput = document.getElementById('guess');
//User submits their guess
const submitButton = document.getElementById('submit');
//Reset game
const resetButton = document.getElementById('reset');
//Response based on user message
const messages = document.getElementsByClassName('message');
//User guess too high
const tooHighMessage = document.getElementById('too-high');
//User guess too low
const tooLowMessage = document.getElementById('too-low');
//User reached maximum number of guesses
const maxGuessesMessage = document.getElementById('max-guesses');
//Store guesses user makes
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
//User correctly guessed
const correctMessage = document.getElementById('correct');
//Number user is trying to correctly guess
let targetNumber;
//User attempts start at 0 and will stop at 5
let attempts = 0;

//change to let so that value can be reassigned later -ns
let maxNumberOfAttempts = 5;

//Reset button and all messages should be hidden -ns
hideAllMessages();
resetButton.style.display = 'none';


//Function to generate the number the user is trying to guess
// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//add submit event listener
//Function to compare user input to random number
// submitButton.addEventListener('submit', (e) => {
//   function checkGuess() {
//     // Get value from guess input element
//     const guess = parseInt(guessInput.value, 10);
//     attempts = attempts + 1;
  
//     // hideAllMessages(); //try removing this call -ns
  
//     if (guess === targetNumber) {
//       numberOfGuessesMessage.style.display = '';
//       numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
  
//       correctMessage.style.display = '';
  
//       submitButton.disabled = true;
//       guessInput.disabled = true;
//     }
  
//     if (guess !== targetNumber) {
//       if (guess < targetNumber) {
//         tooLowMessage.style.display = '';
//       } else {
//         //this displays the same message instead of tooHighMessage -ns
//         tooHighMessage.style.display = '';
//       }
  
//       const remainingAttempts = maxNumberOfAttempts - attempts;
  
//       numberOfGuessesMessage.style.display = '';
//       numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
//     }
//     //Stops user from being able to guess once the max is reached
//     if (attempts === maxNumberOfAttempts) { //one extra equal sign "attempts ==== maxNumberOfAttempts" -ns
//       submitButton.disabled = true;
//       guessInput.disabled = true;
//       //add in message for max number of guesses reached -ns
//       numberOfGuessesMessage.style.display = '';
//       numberOfGuessesMessage.innerHTML = `You have reached the maximum number of guesses. Reset to try again.`
//     }
  
//     guessInput.value = '';
  
//     resetButton.style.display = '';
//   }
//   checkGuess();
// })

//going to try adding this function inside of submit listener
function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  // hideAllMessages(); //try removing this call -ns

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      //this displays the same message instead of tooHighMessage, changed -ns
      tooHighMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }
  //Stops user from being able to guess once the max is reached
  if (attempts === maxNumberOfAttempts) { //one extra equal sign "attempts ==== maxNumberOfAttempts" -ns
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = '';
}

//function to hide all messages
function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) { //change <= to < -ns
    messages[elementIndex].style.display = 'none';
  }
}

function setup() { //typo on the word function "funtion" -ns
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false; //typo on disabled "disabeld" -ns
  guessInput.disabled = false;

  hideAllMessages(); //remove because already hidden
  resetButton.style.display = 'none';
}

// submitButton.addEventListener('click', checkGuess); //try wrapping checkGuess in submit event listener
resetButton.addEventListener('click', setup);
submitButton.addEventListener('submit', checkGuess);
setup();
