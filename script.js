const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btns = document.querySelectorAll("button");

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

const displyScore = () => {};

const playRound = (player) => {
  const comp = rand();
  console.log(player, comp);
  if (opts[player].beats === comp) {
    humanScore++;
    return "player won";
  } else if (opts[comp].beats === player) {
    compScore++;
    return "computer won";
  } else {
    return "draw";
  }
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    console.log(playRound(btn.id));
    console.log(humanScore, compScore);
  }),
);
