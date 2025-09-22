// Random number guessing game: guess a number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 4;
let guessedCorrectly = false;

for (let i = 1; i <= attempts; i++) {
    let remainingAttempts = attempts - i;
    let guess = prompt(`Guess a number between 1 and 10`);
    guess = Number(guess);
    if (guess === secretNumber) {
        alert(`Correct! The number was ${secretNumber}. You guessed it in ${i} tries.`);
        guessedCorrectly = true;
        break;
    } else if (guess < secretNumber) {
        alert('Too low! You have ' + (remainingAttempts) + ' attempts left.');
    } else if (guess > secretNumber) {
        alert('Too high! You have ' + (remainingAttempts) + ' attempts left.');
    } else {
        alert('Invalid input. Please enter a number between 1 and 10.');
    }
}

if (!guessedCorrectly) {
    alert(`Sorry, you did not guess the number. It was ${secretNumber}.`);
}
