////////////////////////////////
/**
 * TODO:
 * - Add distance for better messaging/gaming experience.
 * - Add try again proposal.
 * - Get the number limits and tries from the URL.
 * - Replace alert and prompts with html and slick looking css.
 */
////////////////////////////////
const debug = false;
const trysNbr = 3;
const limitHigh = 10;
const limitlow = 1;
let tried = 0;
let random = Math.random();// Get a random number.
random = random * (limitHigh - limitlow) ; // Multiply by the desired range.
random = Math.floor(random); // Get the absolute value. (removing floating point value)
random = random + limitlow; // Re arrange from the lower limit.
let goodByeString = `😢 ${random} was the correct answer ...`;

window.onload = () => {
    console.log('loaded'); //
    const instruct1 = `Number between ${limitlow} and ${limitHigh} guessing game`;
    const instructParagraph = document.querySelector('#instructions');
    console.log(instructParagraph); //
    const userGursee = document.querySelector('#userGuess');
    const submitBtn = document.querySelector('#submitBtn');
    if(userGursee && submitBtn){
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const userGuessValue = userGursee.value;
            console.log(userGuessValue);
        });
    }
    const instruct2 = `You have ${trysNbr} tries to guess the magic number.`;
    instructParagraph.innerHTML = `<p>${instruct1}</p><p>${instruct2}</p>`; 
}   
// Display instruction.
const instructParagraph = document.querySelector('#instructions');
if (instructParagraph) {
    instructParagraph.style.display = 'block';
}
alert(`Number between ${limitlow} and ${limitHigh} guessing game ${(debug?`(${random})`:'')}`);
// Start the Loop.
do{
    // Get user input.
    let userGuess = prompt(`What is the magic number ? ${trysNbr - tried} tries left`);
    console.log(userGuess, tried); //
    if(userGuess == null){
        const chicken = confirm(`Are you chickening out? ("Ok" if YES "Cancel" if NO)`);
        if(chicken){
            alert(`Glad you are being honest, I give you one more trial`);
            tried--;
        }
    } else if(userGuess == random){
        goodByeString = `🎉 Well done you found ${random} in ${tried} tries`;
        break;
    }else{ //Correct number not found.
        if (userGuess > limitHigh || userGuess < limitlow){ // Out of the limits.
            alert(`${userGuess} is not in the limit, stupid !!! I asked between ${limitlow} and ${limitHigh}`);
        }
        else if( userGuess < random ){
            alert(`${userGuess} is too low`);
        }
        else{
            alert(`too high`);
        }
    }
    tried++;
} while(tried < trysNbr) // Kill the Loop when the number of tries is reached.

alert(goodByeString);