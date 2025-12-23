console.log('Defender Game initialized!');

class DefenderGame {
  constructor() {
    console.log('Game starting...');
  }
  
  start() {
    console.log('Game started!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new DefenderGame();
  game.start();
});
