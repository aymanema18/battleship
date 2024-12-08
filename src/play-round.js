function playRound(turn, player, computer) {
    let computerCells = document.querySelectorAll('.computer-board-cell');
    let playerCells = document.querySelectorAll('.player-board-cell');

    playerCells.forEach((cell) => {
        cell.style.cursor = 'auto';
    });

    function clickComputerCell() {
        let row = this.getAttribute('data-row') * 1;
        let col = this.getAttribute('data-col') * 1;
        this.style.cursor = 'pointer';
        this.style.cursor = 'auto';
        if (computer.board.board[row][col].ship === null) {
            this.style.backgroundColor = 'gray';
            computer.board.board[row][col].ship = 0;
        } else if (computer.board.board[row][col].ship === 0) {
            // do nothing
        } else {
            computer.gotHit(row, col);
        }
    }

    function clickPlayerCell() {
        let row = cell.getAttribute('data-row') * 1;
        let col = cell.getAttribute('data-col') * 1;
        if (player.board.board[row][col].ship === null) {
            cell.style.backgroundColor = 'gray';
            player.board.board[row][col].ship = 0;
        } else if (player.board.board[row][col].ship === 0) {
            // do nothing
        } else {
            player.receiveAttack(row, col);
        }
    }

    if (turn === 'player') {
        playerCells.forEach((cell) => {
            cell.removeEventListener('click', clickPlayerCell);
        });
        computerCells.forEach((cell) => {
            if (computer) cell.style.cursor = 'pointer';
            cell.addEventListener('click', clickComputerCell);
        });
    } else {
        computerCells.forEach((cell) => {
            cell.removeEventListener('click', clickComputerCell);
        });
        playerCells.forEach((cell) => {
            cell.addEventListener('click', clickPlayerCell);
        });
    }
}

export { playRound };
