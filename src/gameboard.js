import { ship } from './ship.js';

function gameBoard() {
    // let cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let board = [
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
        [
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
            { ship: null },
        ],
    ];
    const carrier = ship(4, 'Carrier', 'c1');
    const battleship1 = ship(3, 'Battleship1', 'b1');
    const battleship2 = ship(3, 'Battleship2', 'b2');
    const destroyer1 = ship(2, 'Destroyer1', 'd1');
    const destroyer2 = ship(2, 'Destroyer2', 'd2');
    const destroyer3 = ship(2, 'Destroyer3', 'd3');
    const patrolBoat1 = ship(1, 'Patrol Boat1', 'pb1');
    const patrolBoat2 = ship(1, 'Patrol Boat2', 'pb2');
    const patrolBoat3 = ship(1, 'Patrol Boat3', 'pb3');
    const patrolBoat4 = ship(1, 'Patrol Boat4', 'pb4');
    let ships = [
        carrier,
        battleship1,
        battleship2,
        destroyer1,
        destroyer2,
        destroyer3,
        patrolBoat1,
        patrolBoat2,
        patrolBoat3,
        patrolBoat4,
    ];
    let firstFlag = true;
    let secondFlag = false;
    let index = 0;
    while (firstFlag) {
        let direction = Math.floor(Math.random() * 10);
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        do {
            placeShips(direction, row, col, board, ships, index);
        } while (secondFlag);
    }
}

function placeShips(direction, row, col, board, ships, index) {
    if (direction > 5) {
        if (col > 9 || col < 0 || row > 9 || row < 0) {
            return true;
        }
        for (let i = 0; i < ships[index].length; i++) {
            if (i === 0 || i === ships[index].length - 1) {
                if (i === 0 && typeof board[row] !== 'undefined') {
                    let tempArray = [];
                    //
                    if (
                        typeof board[row - 1] === 'undefined' ||
                        typeof board[row + 1] === 'undefined'
                    ) {
                        if (typeof board[row - 1] === 'undefined') {
                            tempArray.push(board[row][col - 1]);
                            tempArray.push(board[row + 1][col - 1]);
                        } else if (typeof board[row + 1] === 'undefined') {
                            tempArray.push(board[row][col - 1]);
                            tempArray.push(board[row - 1][col - 1]);
                        }
                    } else {
                        tempArray.push(board[row][col - 1]);
                        tempArray.push(board[row - 1][col - 1]);
                        tempArray.push(board[row + 1][col - 1]);
                    }
                    //
                    tempArray = tempArray.filter((item) => {
                        return typeof item !== 'undefined';
                    });

                    for (let j = 0; j < tempArray.length; j++) {
                        if (tempArray[j].ship !== null) {
                            return true;
                        }
                    }
                } else if (
                    (i === ships[index].length - 1 &&
                        typeof board[row] !== 'undefined') ||
                    typeof board[row - 1] !== 'undefined' ||
                    typeof board[row + 1] !== 'undefined'
                ) {
                    let tempArray = [];
                    //
                    if (
                        typeof board[row - 1] === 'undefined' ||
                        typeof board[row + 1] === 'undefined'
                    ) {
                        if (typeof board[row - 1] === 'undefined') {
                            tempArray.push(board[row][col + 1]);
                            tempArray.push(board[row + 1][col + 1]);
                        } else if (typeof board[row + 1] === 'undefined') {
                            tempArray.push(board[row][col + 1]);
                            tempArray.push(board[row - 1][col + 1]);
                        }
                    } else {
                        tempArray.push(board[row][col + 1]);
                        tempArray.push(board[row - 1][col + 1]);
                        tempArray.push(board[row + 1][col + 1]);
                    }
                    //
                    tempArray = tempArray.filter((item) => {
                        return typeof item !== 'undefined';
                    });

                    for (let j = 0; j < tempArray.length; j++) {
                        if (tempArray[j].ship !== null) {
                            return true;
                        }
                    }
                }
            }
            let tempArray = [];
            if (
                typeof board[row - 1] !== 'undefined' &&
                typeof board[row + 1] !== 'undefined'
            ) {
                tempArray.push(board[row - 1][col + i]);
                tempArray.push(board[row + 1][col + i]);
            } else if (typeof board[row - 1] !== 'undefined') {
                tempArray.push(board[row - 1][col + i]);
            } else {
                tempArray.push(board[row + 1][col + i]);
            }

            tempArray = tempArray.filter((item) => {
                return typeof item !== 'undefined';
            });

            for (let j = 0; j < tempArray.length; j++) {
                if (tempArray[j].ship !== null) {
                    return true;
                }
            }
        }
        for (let i = 0; i < ships[index].length; i++) {
            if (typeof board[row][col + i] === 'undefined') {
                return true;
            }
        }
        let j = 0;
        for (let i = 0; i < ships[index].length; i++) {
            board[row][col + j].ship = [ships[index].id];
            j++;
        }
    } else {
        if (col > 9 || col < 0 || row > 9 || row < 0) {
            return true;
        }
        for (let i = 0; i < ships[index].length; i++) {
            if (i === 0 || i === ships[index].length - 1) {
                if (
                    i === 0 &&
                    (typeof board[row - 1] !== 'undefined' ||
                        typeof board[row + 1] !== 'undefined')
                ) {
                    let tempArray = [];
                    //
                    if (typeof board[row - 1] !== 'undefined') {
                        if (
                            typeof board[row][col + 1] === 'undefined' ||
                            typeof board[row][col - 1] === 'undefined'
                        ) {
                            if (typeof board[row][col + 1] === 'undefined') {
                                tempArray.push(board[row - 1][col]);
                                tempArray.push(board[row - 1][col - 1]);
                            } else if (
                                typeof board[row][col - 1] === 'undefined'
                            ) {
                                tempArray.push(board[row - 1][col]);
                                tempArray.push(board[row - 1][col + 1]);
                            }
                        } else {
                            tempArray.push(board[row - 1][col]);
                            tempArray.push(board[row - 1][col - 1]);
                            tempArray.push(board[row - 1][col + 1]);
                        }
                    } else {
                        if (
                            typeof board[row][col + 1] === 'undefined' ||
                            typeof board[row][col - 1] === 'undefined'
                        ) {
                            if (typeof board[row][col + 1] === 'undefined') {
                                tempArray.push(board[row][col - 1]);
                            } else if (
                                typeof board[row][col - 1] === 'undefined'
                            ) {
                                tempArray.push(board[row][col + 1]);
                            }
                        } else {
                            // tempArray.push(board[row][col - 1]);
                            // tempArray.push(board[row][col + 1]);
                        }
                    }
                    //
                    // tempArray.push(board[row - 1][col]);
                    // tempArray.push(board[row - 1][col - 1]);
                    // tempArray.push(board[row - 1][col + 1]);

                    tempArray = tempArray.filter((item) => {
                        return typeof item !== 'undefined';
                    });

                    for (let j = 0; j < tempArray.length; j++) {
                        if (tempArray[j].ship !== null) {
                            return true;
                        }
                    }
                } else if (
                    i === ships[index].length - 1 &&
                    typeof board[row + i + 1] !== 'undefined'
                ) {
                    let tempArray = [];
                    //
                    if (
                        typeof board[row + i + 1][col + 1] === 'undefined' ||
                        typeof board[row + i + 1][col - 1] === 'undefined'
                    ) {
                        if (typeof board[row + i][col + 1] === 'undefined') {
                            tempArray.push(board[row + i + 1][col]);
                            tempArray.push(board[row + i + 1][col - 1]);
                        } else if (
                            typeof board[row + i][col - 1] === 'undefined'
                        ) {
                            tempArray.push(board[row + i + 1][col]);
                            tempArray.push(board[row + i + 1][col + 1]);
                        }
                    } else {
                        tempArray.push(board[row + i + 1][col]);
                        tempArray.push(board[row + i + 1][col - 1]);
                        tempArray.push(board[row + i + 1][col + 1]);
                    }
                    //
                    // tempArray.push(board[row + 1][col]);
                    // tempArray.push(board[row + 1][col - 1]);
                    // tempArray.push(board[row + 1][col + 1]);

                    tempArray = tempArray.filter((item) => {
                        return typeof item !== 'undefined';
                    });

                    for (let j = 0; j < tempArray.length; j++) {
                        if (tempArray[j].ship !== null) {
                            return true;
                        }
                    }
                }
            }
            let tempArray = [];
            if (typeof board[row + i] === 'undefined') {
                return true;
            }
            if (
                typeof board[row + i][col - 1] !== 'undefined' &&
                typeof board[row + i][col + 1] !== 'undefined'
            ) {
                tempArray.push(board[row + i][col - 1]);
                tempArray.push(board[row + i][col + 1]);
            } else if (typeof board[row + i][col - 1] !== 'undefined') {
                tempArray.push(board[row + i][col - 1]);
            } else {
                tempArray.push(board[row + i][col + i]);
            }

            tempArray = tempArray.filter((item) => {
                return typeof item !== 'undefined';
            });

            for (let j = 0; j < tempArray.length; j++) {
                if (tempArray[j].ship !== null) {
                    return true;
                }
            }
        }
        for (let i = 0; i < ships[index].length; i++) {
            if (typeof board[row + i][col] === 'undefined') {
                return true;
            }
        }
        let j = 0;
        for (let i = 0; i < ships[index].length; i++) {
            board[row + j][col].ship = [ships[index].id];
            j++;
        }
    }
    return false;
}

// function ship(length, name, id) {
//     let gotHit = 0;
//     let hasBeenSunk = false;
//     function hit() {
//         if (!hasBeenSunk) {
//             gotHit++;
//             let msg = isSunk();
//             if (hasBeenSunk) {
//                 return msg;
//             }
//         }
//     }
//     function isSunk() {
//         if (gotHit === length) {
//             hasBeenSunk = true;
//             return `${name} is sunk`;
//         }
//     }

//     return {
//         length,
//         get gotHit() {
//             return gotHit;
//         },
//         get hasBeenSunk() {
//             return hasBeenSunk;
//         },
//         hit,
//         id,
//     };
// }
// let board = [
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
//     [
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//         { ship: null },
//     ],
// ];
// const carrier = ship(4, 'Carrier', 'c1');
// const battleship = ship(3, 'Battleship', 'b1');
// const destroyer = ship(2, 'Destroyer', 'd1');
// const patrolBoat = ship(1, 'Patrol Boat', 'pb1');

// let ships = [carrier, battleship, destroyer, patrolBoat];
// placeShips(6, 1, 9, board, ships, 1);
// placeShips(3, 9, 0, board, ships, 1);
export { gameBoard, placeShips };
