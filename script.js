const forfeitCard = [
  {name: 'Dzer pats!'},
  {name: 'Dzer tu!'},
  {name: 'Dzer pa labi!'},
  {name: 'Dzer pa kreisi!'},
  {name: 'Pēdēja nagla!'},
  {name: 'Valstis!'},
  {name: 'Oligarhs!'},
  {name: 'Zvans draugam!'},
  {name: 'Influenceris!'},
  {name: 'Ārpus zonas!'},
  {name: 'Jautājums!'},
  {name: 'Kreiais āķis!'},
  {name: 'Pāris!'},
  {name: 'Dzer visi!'},
  {name: 'Klusums!'},
  {name: 'Uzmini dziesmu!'},
  {name: 'Dzer pats!'},
  {name: 'Prosta iedzer!'},
  {name: 'Tu esi mīkstais!'},
  {name: 'Zem 180cm!'},
  {name: 'Virs 180cm!'},
  {name: 'Dāmas!'},
  {name: 'Vīri!'},
];

let flipped = false;
let currentForfeit = "";

function drawCard() {
  const card = document.getElementById('flip-card');
  const result = document.querySelector('.forfeit-result');

  if (!flipped) {
    card.classList.add('flipped');
    flipped = true;
    result.innerHTML = `<strong>${currentForfeit}</strong>`;
  } else {
    card.classList.remove('flipped');
    flipped = false;

    card.addEventListener("transitionend", function handler() {
      const randomForfeit = Math.floor(Math.random() * forfeitCard.length);
      currentForfeit = forfeitCard[randomForfeit].name;
      card.removeEventListener("transitionend", handler);
    });
  }
}

window.onload = () => {
  const randomForfeit = Math.floor(Math.random() * forfeitCard.length);
  currentForfeit = forfeitCard[randomForfeit].name;
};

let players = [];

function generatePlayerInputs() {
  const count = document.getElementById("playerCount").value;
  const inputsContainer = document.getElementById("playerInputs");
  inputsContainer.innerHTML = ""; 

  for (let i = 1; i <= count; i++) {
    inputsContainer.innerHTML += `
      <input type="text" name="player${i}" placeholder="Player ${i} name" required>
    `;
  }
}


function startGame(event) {
  event.preventDefault();

  const form = document.getElementById("playerForm");
  players = Array.from(form.elements)
    .filter(el => el.type === "text")
    .map(el => ({ name: el.value, score: 0 }));

  renderScores();

  document.getElementById("player-setup").style.display = "none";

}

function renderScores() {
  const scoreDiv = document.querySelector(".score");
  scoreDiv.innerHTML = players.map((p, index) => `
    <p>
      ${p.name}: <span id="score-${index}">${p.score}</span>
      <button onclick="updateScore(${index}, 1)">+</button>
      <button onclick="updateScore(${index}, -1)">-</button>
    </p>
  `).join("");
}

function updateScore(playerIndex, change) {
  players[playerIndex].score += change;
  document.getElementById(`score-${playerIndex}`).textContent = players[playerIndex].score;
}



