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
