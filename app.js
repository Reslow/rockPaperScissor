let options = ["scissor", "paper", "rock"];

let rock = document.querySelector(".rock");
let scissor = document.querySelector(".scissor");
let paper = document.querySelector(".paper");

let computer = document.getElementById("computer");
let player = document.getElementById("player");

let result = document.getElementById("result");

let start = document.querySelector(".start");

const computerplayer = () => {
  let num = Math.floor(Math.random() * options.length);
  let hand = options[num];
  computer.innerText = hand;
  return hand;
};

const playergame = () => {
  rock.addEventListener("click", () => {
    playerChosed = options[2];
    player.innerText = playerChosed;
    computerplayer();
    outcome(playerChosed, computerplayer());
  });

  scissor.addEventListener("click", () => {
    playerChosed = options[0];
    player.innerText = playerChosed;
    computerplayer();
    outcome(playerChosed, computerplayer());
  });

  paper.addEventListener("click", () => {
    playerChosed = options[1];
    player.innerText = playerChosed;
    computerplayer();
    outcome(playerChosed, computerplayer());
  });
};

const outcome = (plA, computerplayer) => {
  if (computerplayer == "scissor" && plA == "rock") {
    result.innerText = "you win! rock beats scissor";
  } else if (plA == "scissor" && computerplayer == "rock") {
    result.innerText = "you loose! rock beats scissor";
  } else if (computerplayer == "paper" && plA == "scissor") {
    result.innerText = "you win! scissor beats paper";
  } else if (plA == "paper" && computerplayer == "scissor") {
    result.innerText = "you loose! scissor beats paper";
  } else if (plA == "rock" && computerplayer == "paper") {
    result.innerText = "you loose! paper beats rock";
  } else if (computerplayer == "rock" && plA == "paper") {
    result.innerText = "you win! paper beats rock";
  } else if (computerplayer === plA) {
    result.innerText = "oh no! its a tie!";
  }
  result.style.visibility = "visible";
};

start.addEventListener("click", () => {
  document.querySelector("#container").style.visibility = "visible";
  start.style.visibility = "hidden";

  playergame();
});
