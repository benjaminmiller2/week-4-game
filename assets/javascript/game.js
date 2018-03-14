let win = 0;
let lose = 0;
let number = 0;
let playerScore = 0;
let input;
let randomNumber = [];
let values = [12, 1, 4, 7]; 


$("#number").text(number);


 
function rando(){ 
  let value = Math.floor(Math.random() * 101) + 20;
  randomNumber.push(value);
  $("#number").text(randomNumber)
};

function startGame(){ 
  $("#wins").text(win);
  $("#losses").text(lose);
  $("#playerScore").text(playerScore);
  randomNumber=[];
  rando();
  number = randomNumber;
  $("#number").text(number);
};

function resetGame(){
  win=0;
  lose=0;
  $("#randomNumber").text(0);
}

function add(){
   playerScore = playerScore + input;

};

function eval(){
  let a = number;
  let b = playerScore;
  
if ( a > b ){
  console.log("youve won nothing yet");
}
else if ( a < b ){
  lose++;
  console.log("youve lost " + lose + " games");
  $("#losses").text(lose);
  playerScore = 0;
}
  else {
  win++;
  console.log("youve won " + win + " games");
  $("#wins").text(win);
  playerScore = 0;
} 
};

function resetGame(){
  $("#wins").text(0);
  $("#losses").text(0);
  $("#playerScore").text(0);
  $("#number").text(0);
}

$("#button1").on("click", function(){
  input = values[0];
  add();
  eval();
  $("#playerScore").text(playerScore);
});

$("#button2").on("click", function(){
  input = values[1];
  add();
  eval();
  $("#playerScore").text(playerScore);
});

$("#button3").on("click", function(){
  input = values[2];
  add();
  eval();
  $("#playerScore").text(playerScore);
});

$("#button4").on("click", function(){
  input = values[3];
  add();
  eval();
  $("#playerScore").text(playerScore);
});
