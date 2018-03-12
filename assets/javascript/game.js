//generate random number between 19 and 120 
let randomNumber = (Math.floor(Math.random() * 101) + 20);

//create variable for player score, and set to zero
let playerScore = 0;

//create empty variable to hold player input
let input;

//create varialbes for wins and losses
let win = 0;
let lose = 0;
//crystal buttons
  //assign value to buttons 
let crystalOne = 12;
let crystalTwo = 1;
let crystalThree = 9;
let crystalFour = 4;

//display player score
$("#playerScore").text(playerScore);

//display win/lose
$("#wins").text(win);
$("#losses").text(lose);

//create function to add player input to player score
function add(){
  playerScore = playerScore + input;
}

//reset game    
function reset(){
  playerScore = 0;
  $("#number").text("");
   $("#playerScore").text(0);
  start();
}

//function to initiate game
function startGame() {

  //display random number
  $("#number").text(randomNumber);

    //create functionality for buttons
$("#crystalOne").on("click", function(){
  input = crystalOne;
  add();
  console.log (playerScore);
  $("#playerScore").text(playerScore);
});

$("#crystalTwo").on("click", function(){
  input = crystalTwo;
 add();
  console.log (playerScore);
  $("#playerScore").text(playerScore);
});

$("#crystalThree").on("click", function(){
  input = crystalThree;
  add();
  console.log (playerScore);
  $("#playerScore").text(playerScore);
});

$("#crystalFour").on("click", function(){
  input = crystalFour;
  add();
  console.log (playerScore);
  $("#playerScore").text(playerScore);
});

  //set conditions for win/lose

  //if equal random number, then win
  if ((playerScore) === (randomNumber)){
    win++;
    //display win
    $("#wins").text(win);
    console.log("You've won " + win + " games.");
  }
  //if over random number, then lose
  if ((playerScore) > (randomNumber)){
    lose++;
    //display loss
    $("#losses").text(lose);
    console.log("You've lost " + lose + " games.");
  } 
}

 
  


