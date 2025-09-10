let randomNumber = Math.random(); // Generates a number between 0 (inclusive) and 1 (exclusive)
randomNumber = Math.ceil(randomNumber * 10); // Now it's between 1 and 10
alert (`Welcome to the Guessing Game! Please insert the max number for the range of the guessing game.`);
let maxNumber = prompt(`Enter the maximum number for the guessing game:`);
alert (`Great! I have selected a random number between 1 and ${maxNumber}. Can you guess it?`);

alert (`Enter a number between 1 and ${maxNumber}`);
let userGuess = prompt('Your guess:');
userGuess = Number(userGuess);

if (userGuess === randomNumber) {
    alert('Congratulations! You guessed the correct number.');
} else if (userGuess < randomNumber) {
    alert(`Sorry, you guessed too low.`);
} else if (userGuess > randomNumber) {
    alert(`Sorry, you guessed too high.`);
}
