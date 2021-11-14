let count = 0;
let options = ["scissor", "paper", "rock"];
let rock = document.querySelector(".rock");
let scissor = document.querySelector(".scissor");
let paper = document.querySelector(".paper");
let computer = document.getElementById("computer");
let player = document.getElementById("player");
let result = document.getElementById("result");
let start = document.querySelector(".start");
let scoreboardCon = document.querySelector("#scoreboardCon");
let scoreComp = 0;
let scoreUser = 0;

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
    scoreUser++;
    result.innerText = "you win! rock beats scissor";
  } else if (plA == "scissor" && computerplayer == "rock") {
    scoreComp++;
    result.innerText = "you loose! rock beats scissor";
  } else if (computerplayer == "paper" && plA == "scissor") {
    scoreUser++;
    result.innerText = "you win! scissor beats paper";
  } else if (plA == "paper" && computerplayer == "scissor") {
    scoreComp++;
    result.innerText = "you loose! scissor beats paper";
  } else if (plA == "rock" && computerplayer == "paper") {
    scoreComp++;
    result.innerText = "you loose! paper beats rock";
  } else if (computerplayer == "rock" && plA == "paper") {
    scoreUser++;
    result.innerText = "you win! paper beats rock";
  } else if (computerplayer === plA) {
    result.innerText = "oh no! its a tie!";
  }

  result.style.visibility = "visible";
  scoreboard(scoreUser, scoreComp);
};

const restart = () => {
  start.addEventListener("click", () => {
    document.querySelector("#container").style.visibility = "visible";
    start.style.visibility = "hidden";
    scoreComp = 0;
    scoreUser = 0;
    count = 0;

    playergame();
  });
};

const scoreboard = (user, computer) => {
  let cell = document.createElement("tr");
  let col1 = document.createElement("td");

  let col2 = document.createElement("td");
  let textnode1 = document.createTextNode(user);
  let textnode2 = document.createTextNode(computer);
  col1.appendChild(textnode1);
  col2.appendChild(textnode2);
  cell.appendChild(col1);
  cell.appendChild(col2);
  scoreboardCon.appendChild(cell);
  let winner = document.createElement("h1");
  count++;

  if (count === 3) {
    if (user > computer) {
      winner.innerText = "User wins!";
      document.querySelector("#score").appendChild(winner);
    } else if (computer > user) {
      winner.innerText = "computer wins!";
      document.querySelector("#score").appendChild(winner);

      document.querySelector("#container").style.visibility = "visible";
    } else {
      winner.innerText = "there is no winner! only loosers!";
      document.querySelector("#score").appendChild(winner);
    }

    restart();
  }
};
window.onload = (event) => {
  restart();
};
