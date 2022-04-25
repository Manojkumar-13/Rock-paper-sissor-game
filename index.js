const readlineSync = require('readline-sync');
// build a rock paper sissors game where user plays against computer
// everytime user wins user gets 1 point and every time user lose user loose one point
// finish the game when either user reaches score of 5, user completes 10 changes
//display result


// create logic for computer choice
//  get the choice from user
// Compare the choices-- game logic
// global
let scoreComputer = 0;
let scoreUser = 0;
let i = 0;

// Computer Choics
const getComputerChoice = function(){
  let weapons = ['rock', 'paper', 'sissor'];
  return weapons[Math.trunc(Math.random() * 3)];
}

// userChoice
const getUserChoice = function(){
  let userChoice = readlineSync.question(`Select your weapon from 'rock', 'paper', 'sissor':  `);
  return userChoice;
}

// game logic
const gameLogic = function(){
  let computerWeapon = getComputerChoice();
let userWeapon = getUserChoice();

if (computerWeapon === userWeapon.toLowerCase()){
  console.log(`Your Choice is ${userWeapon} and Computer Choice is ${computerWeapon}`);
  console.log(`draw`);
  scoreComputer = scoreComputer + 1;
  scoreUser = scoreUser + 1;
  console.log(`Computer Score is ${scoreComputer}`);
  console.log(`Your Score is ${scoreUser}`);
}else if((computerWeapon === 'rock' && userWeapon.toLowerCase() === 'sissor') || (computerWeapon === 'sissor' && userWeapon.toLowerCase() === 'paper') || (computerWeapon === 'paper' && userWeapon.toLowerCase() === 'rock')){
  console.log(`Your Choice is ${userWeapon} and Computer Choice is ${computerWeapon}`);
  console.log(`Computer gets a point`);
  scoreComputer = scoreComputer + 2;
  console.log(`Computer Score is ${scoreComputer}`);
  console.log(`Your Score is ${scoreUser}`);
}else if((computerWeapon === 'rock' && userWeapon.toLowerCase() === 'paper') || (computerWeapon === 'sissor' && userWeapon.toLowerCase() === 'rock') || (computerWeapon === 'paper' && userWeapon.toLowerCase() === 'sissor')){
  console.log(`Your Choice is ${userWeapon} and Computer Choice is ${computerWeapon}`);
  console.log(`User gets a point`);
  scoreUser = scoreUser + 2;
  console.log(`Computer Score is ${scoreComputer}`);
  console.log(`Your Score is ${scoreUser}`);
}
}
const game = function(){
  while(i < 10){
  if ((scoreComputer < 5) && (scoreUser < 5)){
    gameLogic();
    i = i+1;
  }else{
    i = 10;
    if(scoreComputer > scoreUser){
      console.log(`Computer wins with the score of ${scoreComputer}`)
    }else{
      console.log(`User wins with the score of ${scoreUser}`)
    }
  }
  
}
}
game();




  
