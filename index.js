//To be able to use readline-sync, we need to call it
const readlineSync = require("readline-sync");

//Wait for player 1's response
let p1 = readlineSync.question("PLAYER 1: What is your selection? ");
console.log("PLAYER 1 SELECTED: " + p1 + "!");

//Wait for player 2's input
let p2 = readlineSync.question("PLAYER 2: What is your selection? ");
console.log("PLAYER 2 SELECTED: " + p2 + "!");

//Time to compare inputs
//Write a function called p1 and p2
let winner = compare(p1, p2);

if (winner === "player 1") {
  console.log("winner is player 1");
} else if (winner === "player 2") {
  console.log("winner is player 2");
} else if (winner === "draw") {
  console.log("It is a tie");
}

function compare(p1, p2) {
  if (p1 === "paper") {
    if (p2 === "paper") {
      return "draw";
    } else if (p2 === "scissors") {
      return "player 2";
    } else p2 === "rock";
    return "player 1";
  } else if (p1 === "rock") {
    if (p2 === "rock") {
      return "draw";
    } else if (p2 === "scissors") {
      return "player 1";
    } else p2 === "paper";
    return "player 2";
  } else if (p1 === "scissors") {
    if (p2 === "rock") {
      return "player 2";
    } else if (p2 === "scissors") {
      return "draw";
    } else p2 === "paper";
    return "player 1";
  }
}
