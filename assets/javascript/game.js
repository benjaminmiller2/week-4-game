
let win = 0;
let lose = 0;
let number = 0;
let playerScore = 0;
let score = [];
let input;
let randomNumber = [];
let values = [12, 1, 4, 7]; 
let evalNumber = [];

$("#number").text(number);
$("#playerScore").text(playerScore);
$("#wins").text(win);
$("#losses").text(lose);
 
function rando(){ 
  let value = Math.floor(Math.random() * 101) + 20;
  randomNumber.push(value);
  $("#number").text(randomNumber)
};

function startGame(){ 
  randomNumber=[];
  score=[];
  evalNumber=[];
  rando();
  number = randomNumber;
  $("#number").text(number);
};

function add(){
   playerScore = playerScore + input;
};

function eval(){
  let a = randomNumber;
  let b = playerScore;
  
if ( a === b ){
  win++;
  console.log("youve won " + win + " games");
  $("#wins").text(win);
};
 
if ( a < b ){
  lose++;
  console.log("youve lost " + lose + " games");
  $("#losses").text(lose);
};
};


$("#button1").on("click", function(){
  input = values[0];
  add();
  eval();
  $("#playerScore").text(playerScore);
})
$("#button2").on("click", function(){
  input = values[1];
  add();
  eval();
  $("#playerScore").text(playerScore);
})
$("#button3").on("click", function(){
  input = values[2];
  add();
  eval();
  $("#playerScore").text(playerScore);
})
$("#button4").on("click", function(){
  input = values[3];
  add();
  eval();
  $("#playerScore").text(playerScore);
});
