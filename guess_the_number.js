
var randomNumber = Math.round(Math.random()*100);
var numberOfGuesses = 5;
var result;

function generateRandomNumber() {
	
	numberOfGuesses --;
	
	var numberInput = document.getElementById("numberInput").value
	var clue = document.getElementById("clue");

console.log(numberOfGuesses);
	
	if (numberInput == randomNumber) {
		result = "Yay! You win!";
		}
	else if	(numberInput < randomNumber) {
		result = "Your guess is too low! " + numberOfGuesses + " guesses remaining";
		}
	else if (numberInput > randomNumber) {
		result = "Your guess is too high! " + numberOfGuesses + " guesses remaining";
		}

if (numberOfGuesses === 0) {
	result = "Game over. You Lose! The number is " + randomNumber;
	}
clue.innerHTML = result;
}

