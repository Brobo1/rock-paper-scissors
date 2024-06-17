const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btns = document.querySelectorAll("button");
const humanScoreElem = document.getElementById("human-score");
const compScoreElem = document.getElementById("computer-score");
const round = document.getElementById("rounds");
let rematchBtn = document.createElement("button");

const opts = {
  rock: { beats: "scissors", loses: "paper" },
  paper: { beats: "rock", loses: "scissors" },
  scissors: { beats: "paper", loses: "rock" },
};

let humanScore = 0;
let compScore = 0;
let roundNum = 0;

const rand = () => {
  const compOpt = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * compOpt.length);
  return compOpt[random];
};

const displayScore = (winner) => {
  if (winner === 1) {
    humanScoreElem.innerText = `Human score: ${humanScore}`;
    round.innerHTML = `
    <div class="round">
      <p>Human wins!</p>
      <p>${roundNum}</p>
    </div>
      ${round.innerHTML}
    `;
  } else if (winner === -1) {
    compScoreElem.innerText = `${compScore}: Computer score`;
    round.innerHTML = `
    <div class="round">
      <p>Computer wins!</p>
      <p>${roundNum}</p>
    </div>
      ${round.innerHTML}
    `;
  } else {
    round.innerHTML = `
    <div class="round">
      <p>Draw!</p>
      <p>${roundNum}</p>
    </div>
      ${round.innerHTML}
    `;
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

const rematch = () => {
  rematchBtn.textContent = "Rematch?";
  round.prepend(rematchBtn);
};

const end = () => {
  if (humanScore === 5 || compScore === 5) {
    btns.forEach((btn) => (btn.disabled = true));
    if (humanScore === 5) {
      round.innerHTML = `
        <div class="round">
          <h2>Human wins!</h2>
        </div>
        ${round.innerHTML}
      `;
    }
    if (compScore === 5) {
      round.innerHTML = `
        <div class="round">
          <h2>Computer wins!</h2>
        </div>
        ${round.innerHTML}
      `;
    }
    rematch();
  }
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
  console.log("sadasd");
});
