const bubble = document.createElement('div');
const game = document.querySelector('.game');

bubble.classList.add('bubble');
game.append(bubble);

bubble.addEventListener('click', () => {
  const newPos = getNewPos();
  bubble.style.left = newPos.x + 'px';
  bubble.style.top = newPos.y + 'px';
});

bubble.click();

function getNewPos(){
  const gameBoundingRect = game.getBoundingClientRect();
  const bubbleBoundingRect = bubble.getBoundingClientRect();

  return {
    x: Math.floor(Math.random() * (gameBoundingRect.width - bubbleBoundingRect.width)),
    y: Math.floor(Math.random() * (gameBoundingRect.height - bubbleBoundingRect.height)),
  }
}
