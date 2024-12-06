import { gameBoard } from './gameboard.js';

function players(name) {
    let board = gameBoard();

    function gotHit(cord1, cord2) {
        board.receiveAttack(cord1, cord2);
    }
    return {
        name,
        get board() {
            return board;
        },
        gotHit,
    };
}

function computer() {
    let name = 'Computer';
    let board = gameBoard();

    function gotHit() {
        let cord1 = Math.floor(Math.random() * 10);
        let cord2 = Math.floor(Math.random() * 10);
        do {
            if (board.board[cord1][cord2].ship !== null) {
                if (cord2 < 9) {
                    cord2 += 1;
                } else if (cord2 === 9 && cord1 === 9) {
                    cord2 = 0;
                    cord1 = 0;
                } else {
                    cord2 = 0;
                    cord1 += 1;
                }
            }
        } while (board[cord1][cord2].ship !== null);

        board.receiveAttack(cord1, cord2);
    }

    return {
        name,
        get board() {
            return board;
        },
        gotHit,
    };
}

export { players, computer };
