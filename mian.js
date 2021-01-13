// DOM elements
const firstDice = document.querySelector('.img1');
const secondDice = document.querySelector('.img2');
const title = document.querySelector('h1');
const playButton = document.querySelector('.play');

// Functions
function play() {
	const firstDiceNumber = generateRandomNumber();
	const secondDiceNumber = generateRandomNumber();
	setDice(firstDice, firstDiceNumber);
	setDice(secondDice, secondDiceNumber);
	setWinner(firstDiceNumber, secondDiceNumber);
}

function generateRandomNumber() {
	let randomNumber = Math.random() * (6 - 1) + 1;
	return Math.round(randomNumber);
}

function setDice(dice, diceNumber) {
	dice.setAttribute('src', `images/dice${diceNumber}.png`);
}

function setWinner(dice1, dice2) {
	title.textContent =
		dice1 == dice2
			? 'Draw'
			: dice1 > dice2
			? 'Player 1 Wins'
			: 'Player 2 Wins';
}

playButton.addEventListener('click', play);
