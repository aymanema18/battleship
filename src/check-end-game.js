import { initDisplay } from './initial-display';

function gameOver(player) {
    if (player.board.gameOver) {
        let playButtonContainer = document.querySelector('.button-container');
        let playButtonBackground = document.createElement('div');
        let newGameButton = document.createElement('div');
        let main = document.querySelector('main');
        let p = document.createElement('p');

        playButtonBackground.classList.add('play-button-background');
        newGameButton.classList.add('new-game-button');
        newGameButton.innerText = 'New game';
        playButtonContainer.appendChild(newGameButton);
        p.style.alignSelf = 'center';
        p.style.fontWeight = '700';

        if (player.name === 'Computer') {
            p.innerHTML = 'You won';
            main.insertBefore(p, main.firstChild);
        } else {
            p.innerHTML = 'You lost';
            main.insertBefore(p, main.firstChild);
        }

        newGameButton.addEventListener('click', () => {
            initDisplay();
        });

        return true;
    }

    return false;
}

export { gameOver };
