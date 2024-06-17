const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btns = document.querySelectorAll("button");
const humanScoreElem = document.getElementById("human-score");
const compScoreElem = document.getElementById("computer-score");
const round = document.getElementById("round");

const opts = {
  rock: { beats: "scissors", loses: "paper" },
  paper: { beats: "rock", loses: "scissors" },
  scissors: { beats: "paper", loses: "rock" },
};

let humanScore = 0;
let compScore = 0;

const rand = () => {
  const compOpt = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * compOpt.length);
  return compOpt[random];
};

const displayScore = (winner) => {
  if (winner === 1) {
    humanScoreElem.innerText = `Human score: ${humanScore}`;
    round.innerHTML = `<p>Human wins!</p> ${round.innerHTML}`;
  } else if (winner === -1) {
    compScoreElem.innerText = `${compScore}: Computer score`;
    round.innerHTML = `<p>Computer wins!</p> ${round.innerHTML}`;
  } else {
    round.innerHTML = `<p>Draw!</p> ${round.innerHTML}`;
  }
};

const playRound = (player) => {
  const comp = rand();
  if (opts[player].beats === comp) {
    humanScore++;
    return 1;
  } else if (opts[comp].beats === player) {
    compScore++;
    return -1;
  } else {
    return 0;
  }
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    displayScore(playRound(btn.id));
  }),
);
