const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btns = document.querySelectorAll("button");
const humanScoreElem = document.getElementById("human-score");
const compScoreElem = document.getElementById("computer-score");
const rounds = document.getElementById("rounds");

let rematchBtn = document.createElement("button");

const opts = {
  rock: { beats: "scissors", loses: "paper" },
  paper: { beats: "rock", loses: "scissors" },
  scissors: { beats: "paper", loses: "rock" },
};

let humanScore = 0;
let compScore = 0;
let roundNum = 0;

const getComputerChoice = () => {
  const compOpt = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * compOpt.length);
  return compOpt[random];
};

const displayScore = (winner) => {
  let state;

  if (winner.state === 1) {
    humanScoreElem.innerText = `Human score: ${humanScore}`;
    state = `Human wins`;
  } else if (winner.state === -1) {
    compScoreElem.innerText = `${compScore}: Computer score`;
    state = `Computer wins`;
  } else {
    state = "Draw";
  }
  rounds.innerHTML = `
    <div class="round">
        <p>Human chose: ${winner.player}</p>
        <p>${state}</p>
        <p>Computer chose: ${winner.comp}</p>
    </div>
      ${rounds.innerHTML}
    `;
};
const playRound = (player) => {
  const comp = getComputerChoice();
  console.log(player, comp);
  if (opts[player].beats === comp) {
    humanScore++;
    return { state: 1, player: player, comp: comp };
  } else if (opts[comp].beats === player) {
    compScore++;
    return { state: -1, player: player, comp: comp };
  } else {
    return { state: 0, player: player, comp: comp };
  }
};

const end = () => {
  let winner;
  if (humanScore === 5 || compScore === 5) {
    btns.forEach((btn) => (btn.disabled = true));
    if (humanScore === 5) {
      winner = "Human";
    }
    if (compScore === 5) {
      winner = "Computer";
    }
    rounds.innerHTML = `
          <h2>${winner} wins!</h2>
        ${rounds.innerHTML}
      `;
    rematch();
  }
};

const rematch = () => {
  rematchBtn.textContent = "Rematch?";
  rounds.prepend(rematchBtn);
};

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    roundNum++;
    displayScore(playRound(btn.id));
    end();
  }),
);

rematchBtn.addEventListener("click", () => {
  btns.forEach((btn) => (btn.disabled = false));
  humanScore = 0;
  compScore = 0;
  humanScoreElem.innerText = `Human score: ${humanScore}`;
  compScoreElem.innerText = `${compScore}: Computer score`;
  rounds.innerHTML = "";
});
