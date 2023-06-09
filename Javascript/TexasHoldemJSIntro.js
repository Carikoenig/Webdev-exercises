// Texas Hold'em JS Übung 
//  https://learn.microsoft.com/de-de/training/modules/web-development-101-variables/4-exercise-variables

let gameHasEnded = false;

/*
let startingPokerChips = 100;
let players = 3;
let noOfStarterCards = 2;
*/

const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

/*
let playerOnePoints = startingPokerChips;
let playerTwoPoints = startingPokerChips;
let playerThreePoints = startingPokerChips;
*/

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName} and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`)

playerOnePoints -= 50;
playerTwoPoints -= 25;
playerThreePoints += 75;

playerOnePoints -= 50;
playerTwoPoints -= 75;
playerThreePoints += 125;

gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has won
               ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  // two has won 

console.log("Game has ended: ", gameHasEnded);
