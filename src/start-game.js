import { playRound } from './play-round';

function startGame(player, computer) {
    let playButton = document.querySelector('.play-button');
    let turn = Math.floor(Math.random() * 10);
    playButton.addEventListener('click', () => {
        let playButtonContainer = document.querySelector('.button-container');
        let random = document.querySelector('.random');
        random.remove();
        playButtonContainer.innerHTML = '';
        if (turn > 5) {
            turn = 'player';
            playRound(turn, player, computer);
        } else {
            turn = 'computer';
            playRound(turn, player, computer);
        }
    });
}

export { startGame };
