import { gameOver } from './check-end-game';

function playRound(turn, player, computer) {
    let computerCells = document.querySelectorAll('.computer-board-cell');
    let playerCells = document.querySelectorAll('.player-board-cell');
    let availablePlayerCells = [];
    let availableComputerCells = [];

    for (let i = 0; i < computer.board.board.length; i++) {
        availableComputerCells.push([]);
        for (let j = 0; j < computer.board.board[i].length; j++) {
            availableComputerCells[i].push(`${i}${j}`);
        }
    }

    for (let i = 0; i < player.board.board.length; i++) {
        availablePlayerCells.push([]);
        for (let j = 0; j < player.board.board[i].length; j++) {
            availablePlayerCells[i].push(`${i}${j}`);
        }
    }

    playerCells.forEach((cell) => {
        cell.style.cursor = 'auto';
    });

    if (turn === 'player') {
        for (let i = 0; i < computer.board.board.length; i++) {
            for (let j = 0; j < computer.board.board[i].length; j++) {
                if (
                    typeof availableComputerCells[i][
                        availableComputerCells[i].indexOf(`${i}${j}`)
                    ] !== 'undefined'
                ) {
                    let tempCell = document.querySelector(
                        `.computer-board-cell[data-row="${i}"][data-col="${j}"]`,
                    );
                    tempCell.removeEventListener('click', clickComputerCell);
                    tempCell.style.cursor = 'pointer';
                }
            }
        }

        computerCells.forEach((cell) => {
            cell.addEventListener('click', clickComputerCell);
        });
    } else {
        let row = Math.floor(Math.random() * availablePlayerCells.length);
        let cords =
            availablePlayerCells[row][
                Math.floor(Math.random() * availablePlayerCells[row].length)
            ];
        let cellElement = document.querySelector(
            `.player-board-cell[data-row="${cords[0] * 1}"][data-col="${cords[1] * 1}"]`,
        );
        cellElement.addEventListener('click', clickPlayerCell);
        cellElement.click();
    }

    function clickComputerCell() {
        let row = this.getAttribute('data-row') * 1;
        let col = this.getAttribute('data-col') * 1;

        if (computer.board.board[row][col].ship === null) {
            this.style.backgroundColor = 'gray';
            this.style.cursor = 'auto';
            computer.board.board[row][col].ship = 0;
            computerCells.forEach((cell) => {
                cell.style.cursor = 'auto';
                cell.removeEventListener('click', clickComputerCell);
            });
        } else if (computer.board.board[row][col].ship === 0) {
            // do nothing
        } else {
            computer.gotHit(row, col);
            this.style.backgroundColor = 'rgb(255,0,0)';
            this.style.cursor = 'auto';

            computerCells.forEach((cell) => {
                cell.style.cursor = 'auto';
                cell.removeEventListener('click', clickComputerCell);
            });
        }

        availableComputerCells[row].splice(
            availableComputerCells[row].indexOf(`${row}${col}`),
            1,
        );

        let check = gameOver(computer);
        if (!check) {
            playerCells.forEach((cell) => {
                if (
                    typeof availablePlayerCells[
                        cell.getAttribute('data-row') * 1
                    ][
                        availablePlayerCells[
                            cell.getAttribute('data-row') * 1
                        ].indexOf(
                            `${cell.getAttribute('data-row') * 1}${cell.getAttribute('data-col') * 1}`,
                        )
                    ] !== 'undefined'
                ) {
                    cell.addEventListener('click', clickPlayerCell);
                }
            });

            row = Math.floor(Math.random() * availablePlayerCells.length);
            while (availablePlayerCells[row].length === 0) {
                if (row < 9) {
                    row++;
                } else {
                    row = 0;
                }
            }
            col = Math.floor(Math.random() * availablePlayerCells[row].length);
            let cords = availablePlayerCells[row][col];
            let cellElement = document.querySelector(
                `.player-board-cell[data-row="${cords[0] * 1}"][data-col="${cords[1] * 1}"]`,
            );
            cellElement.click();
        }
    }

    function clickPlayerCell() {
        setTimeout(() => {
            let row = this.getAttribute('data-row') * 1;
            let col = this.getAttribute('data-col') * 1;
            if (player.board.board[row][col].ship === null) {
                this.style.backgroundColor = 'gray';
                player.board.board[row][col].ship = 0;
                playerCells.forEach((cell) => {
                    cell.removeEventListener('click', clickPlayerCell);
                });
            } else if (player.board.board[row][col].ship === 0) {
                // do nothing
            } else {
                player.gotHit(row, col);
                this.style.backgroundColor = 'rgb(0,0,255)';
                playerCells.forEach((cell) => {
                    cell.removeEventListener('click', clickPlayerCell);
                });
            }

            for (let i = 0; i < computer.board.board.length; i++) {
                for (let j = 0; j < computer.board.board[i].length; j++) {
                    if (
                        typeof availableComputerCells[i][
                            availableComputerCells[i].indexOf(`${i}${j}`)
                        ] !== 'undefined'
                    ) {
                        let tempCell = document.querySelector(
                            `.computer-board-cell[data-row="${i}"][data-col="${j}"]`,
                        );
                        tempCell.removeEventListener(
                            'click',
                            clickComputerCell,
                        );
                        tempCell.style.cursor = 'pointer';
                    }
                }
            }
            availablePlayerCells[row].splice(
                availablePlayerCells[row].indexOf(`${row}${col}`),
                1,
            );

            let check = gameOver(player);

            if (!check) {
                computerCells.forEach((cell) => {
                    if (
                        typeof availableComputerCells[
                            cell.getAttribute('data-row') * 1
                        ][
                            availableComputerCells[
                                cell.getAttribute('data-row') * 1
                            ].indexOf(
                                `${cell.getAttribute('data-row') * 1}${cell.getAttribute('data-col') * 1}`,
                            )
                        ] !== 'undefined'
                    ) {
                        cell.style.cursor = 'pointer';
                        cell.addEventListener('click', clickComputerCell);
                    }
                });
            }
        }, 500);
    }
}

export { playRound };
