console.log('Defender Game initialized!');

// Базовый шаблон для игры
class DefenderGame {
  constructor() {
    console.log('Game starting...');
  }
  
  start() {
    console.log('Game started!');
  }
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const game = new DefenderGame();
  game.start();
});