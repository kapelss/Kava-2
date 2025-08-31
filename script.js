const forfeitCard = [
  {name: 'Dzer pats!'},
  {name: 'Dzer tu!'},
  {name: 'Dzer pa labi!'},
  {name: 'Dzer pa kreisi!'},
  {name: 'Pēdēja nagla!'}
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
