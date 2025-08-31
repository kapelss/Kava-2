const forfeitCard = [
  {name: 'Dzer pats!'},
  {name: 'Dzer tu!'},
  {name: 'Dzer pa labi!'},
  {name: 'Dzer pa kreisi!'},
  {name: 'Pēdēja nagla!'},
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

