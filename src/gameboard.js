import { ship } from './ship.js';

function gameBoard() {
    let gameOver = false;
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
    let refBoard = [
        ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
        ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
        ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
        ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
        ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        ['60', '61', '62', '63', '64', '65', '06', '67', '68', '69'],
        ['70', '71', '72', '73', '04', '75', '76', '77', '78', '79'],
        ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
        ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
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

    for (let i = 0; i < 10; i++) {
        let direction = Math.floor(Math.random() * 10);
        let tempRow;
        let tempCol;
        let cords;
        do {
            tempRow = Math.floor(Math.random() * refBoard.length);
            tempCol = Math.floor(Math.random() * refBoard[tempRow].length);
            cords = refBoard[tempRow][tempCol];
        } while (typeof refBoard[tempRow][tempCol] === 'undefined');
        placeShips(direction, cords, board, refBoard, ships, i);
    }

    function receiveAttack(cord1, cord2) {
        if (board[cord1][cord2].ship === null) {
            console.log('we reached here');
            console.log(`in ${cord1}${cord2}`);

            board[cord1][cord2].ship = 0;
            return 'Attack missed';
        } else if (board[cord1][cord2].ship !== null) {
            if (board[cord1][cord2].ship === 0) {
                return 'no no';
            } else {
                for (let i = 0; i < ships.length; i++) {
                    if (ships[i].id === board[cord1][cord2].ship) {
                        let temp = ships[i].hit();
                        check();
                        return temp;
                    }
                }
            }
        }
    }

    function check() {
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].hasBeenSunk !== true) {
                return;
            }
        }
        gameOver = true;
    }

    function toTest(newBoard) {
        board = newBoard;
    }

    function show() {
        return gameOver;
    }

    return {
        get board() {
            return board;
        },
        get gameOver() {
            return gameOver;
        },
        receiveAttack,
        toTest,
        show,
    };
}

function placeShips(direction, cords, board, refBoard, ships, index) {
    let row = cords[0] * 1;
    let col = cords[1] * 1;
    if (direction > 5) {
        if (index === 0) {
            let flag = true;
            do {
                if (col + ships[index].length - 1 < 10) {
                    for (let i = 0; i < ships[index].length; i++) {
                        board[row][col + i].ship = ships[index].id;
                        if (i === 0) {
                            refBoard[row].splice(
                                refBoard[row].indexOf(`${row}${col + i}`),
                                ships[index].length + 1,
                            );
                            if (col > 0) {
                                refBoard[row].splice(
                                    refBoard[row].indexOf(`${row}${col - 1}`),
                                    1,
                                );
                            }

                            if (typeof board[row + 1] === 'undefined') {
                                refBoard[row - 1].splice(
                                    refBoard[row - 1].indexOf(
                                        `${row - 1}${col + i}`,
                                    ),
                                    ships[index].length + 1,
                                );

                                if (col > 0) {
                                    refBoard[row - 1].splice(
                                        refBoard[row - 1].indexOf(
                                            `${row - 1}${col - 1}`,
                                        ),
                                        1,
                                    );
                                }
                            } else if (typeof board[row - 1] === 'undefined') {
                                refBoard[row + 1].splice(
                                    refBoard[row + 1].indexOf(
                                        `${row + 1}${col + i}`,
                                    ),
                                    ships[index].length + 1,
                                );

                                if (col > 0) {
                                    refBoard[row + 1].splice(
                                        refBoard[row + 1].indexOf(
                                            `${row + 1}${col - 1}`,
                                        ),
                                        1,
                                    );
                                }
                            } else {
                                refBoard[row - 1].splice(
                                    refBoard[row - 1].indexOf(
                                        `${row - 1}${col + i}`,
                                    ),
                                    ships[index].length + 1,
                                );
                                refBoard[row + 1].splice(
                                    refBoard[row + 1].indexOf(
                                        `${row + 1}${col + i}`,
                                    ),
                                    ships[index].length + 1,
                                );

                                if (col > 0) {
                                    refBoard[row - 1].splice(
                                        refBoard[row - 1].indexOf(
                                            `${row - 1}${col - 1}`,
                                        ),
                                        1,
                                    );
                                    refBoard[row + 1].splice(
                                        refBoard[row + 1].indexOf(
                                            `${row + 1}${col - 1}`,
                                        ),
                                        1,
                                    );
                                }
                            }
                        }
                    }
                    flag = false;
                } else {
                    col = Math.floor(Math.random() * 10);
                }
            } while (flag);
        } else {
            let flag = true;
            do {
                for (let i = 0; i < ships[index].length; i++) {
                    if (refBoard[row].indexOf(`${row}${col + i}`) === -1) {
                        if (typeof refBoard[row][col + 1] !== 'undefined') {
                            col = col + 1;
                            break;
                        } else {
                            col = 0;
                            if (typeof refBoard[row + 1] !== 'undefined') {
                                row = row + 1;
                            } else {
                                row = 0;
                            }
                            break;
                        }
                    }
                    if (i === ships[index].length - 1) {
                        flag = false;
                    }
                }
            } while (flag);
            for (let i = 0; i < ships[index].length; i++) {
                board[row][col + i].ship = ships[index].id;
                if (i === 0) {
                    refBoard[row].splice(
                        refBoard[row].indexOf(`${row}${col}`),
                        ships[index].length + 1,
                    );

                    if (col > 0) {
                        refBoard[row].splice(
                            refBoard[row].indexOf(`${row}${col - 1}`),
                            1,
                        );
                    }

                    if (row > 0) {
                        refBoard[row - 1].splice(
                            refBoard[row - 1].indexOf(`${row - 1}${col}`),
                            ships[index].length + 1,
                        );

                        if (col > 0) {
                            refBoard[row - 1].splice(
                                refBoard[row - 1].indexOf(
                                    `${row - 1}${col - 1}`,
                                ),
                                1,
                            );
                        }
                    }

                    if (row < 9) {
                        refBoard[row + 1].splice(
                            refBoard[row + 1].indexOf(`${row + 1}${col}`),
                            ships[index].length + 1,
                        );

                        if (col > 0) {
                            refBoard[row + 1].splice(
                                refBoard[row + 1].indexOf(
                                    `${row + 1}${col - 1}`,
                                ),
                                1,
                            );
                        }
                    }
                }
            }
        }
    } else {
        if (index === 0) {
            let flag = true;
            do {
                if (row + ships[index].length - 1 < 10) {
                    for (let i = 0; i < ships[index].length; i++) {
                        board[row + i][col].ship = ships[index].id;
                        if (i === 0) {
                            for (let j = 0; j < ships[index].length; j++) {
                                refBoard[row + j].splice(
                                    refBoard[row + j].indexOf(
                                        `${row + j}${col}`,
                                    ),
                                    1,
                                );
                                if (j === 0 && row > 0) {
                                    refBoard[row - 1].splice(
                                        refBoard[row - 1].indexOf(
                                            `${row - 1}${col}`,
                                        ),
                                        1,
                                    );
                                }
                                if (j === ships[index].length - 1) {
                                    if (
                                        typeof refBoard[row + j + 1] !==
                                        'undefined'
                                    ) {
                                        refBoard[row + j + 1].splice(
                                            refBoard[row + j + 1].indexOf(
                                                `${row + j + 1}${col}`,
                                            ),
                                            1,
                                        );

                                        if (col > 0) {
                                            refBoard[row + j + 1].splice(
                                                refBoard[row + j + 1].indexOf(
                                                    `${row + j + 1}${col - 1}`,
                                                ),
                                                1,
                                            );
                                        }
                                        if (col < 9) {
                                            refBoard[row + j + 1].splice(
                                                refBoard[row + j + 1].indexOf(
                                                    `${row + j + 1}${col + 1}`,
                                                ),
                                                1,
                                            );
                                        }
                                    }
                                }
                                if (
                                    typeof refBoard[row + j][col - 1] !==
                                    'undefined'
                                ) {
                                    refBoard[row + j].splice(
                                        refBoard[row + j].indexOf(
                                            `${row + j}${col - 1}`,
                                        ),
                                        1,
                                    );
                                    if (j === 0 && row > 0) {
                                        refBoard[row - 1].splice(
                                            refBoard[row - 1].indexOf(
                                                `${row - 1}${col - 1}`,
                                            ),
                                            1,
                                        );
                                    }
                                }
                                if (
                                    typeof refBoard[row + j][
                                        refBoard[row + j].indexOf(
                                            `${row + j}${col + 1}`,
                                        )
                                    ] !== 'undefined'
                                ) {
                                    refBoard[row + j].splice(
                                        refBoard[row + j].indexOf(
                                            `${row + j}${col + 1}`,
                                        ),
                                        1,
                                    );
                                    if (j === 0 && row > 0) {
                                        refBoard[row - 1].splice(
                                            refBoard[row - 1].indexOf(
                                                `${row - 1}${col + 1}`,
                                            ),
                                            1,
                                        );
                                    }
                                }
                            }
                        }
                    }
                    flag = false;
                } else {
                    row = Math.floor(Math.random() * 10);
                }
            } while (flag);
        } else {
            let flag = true;
            do {
                if (row + ships[index].length - 1 < 10) {
                    for (let i = 0; i < ships[index].length; i++) {
                        if (
                            refBoard[row + i].indexOf(`${row + i}${col}`) === -1
                        ) {
                            if (typeof refBoard[row][col + 1] !== 'undefined') {
                                col = col + 1;
                                break;
                            } else {
                                col = 0;
                                if (
                                    typeof refBoard[row + 1] !== 'undefined' &&
                                    row + ships[index].length <= 9
                                ) {
                                    row = row + 1;
                                    break;
                                } else if (
                                    (typeof refBoard[row + 1] !== 'undefined' &&
                                        row + ships[index].length > 9) ||
                                    typeof refBoard[row + 1] === 'undefined'
                                ) {
                                    row = 0;
                                    break;
                                }
                            }
                        }
                        if (i === ships[index].length - 1) {
                            flag = false;
                        }
                    }
                } else {
                    row = row - 1;
                }
                // let refCol = refBoard[row][col][1] * 1;
                // for (let i = 0; i < ships[index].length; i++) {
                //     let tempRefCol = refBoard[row + i][col][0] * 1;
                //     if (refCol + i !== tempRefCol) {
                //         if (typeof refBoard[row + 1][col] !== 'undefined') {
                //             col = col + 1;
                //             break;
                //         } else {
                //             col = 0;
                //             if (typeof refBoard[row + 1] !== 'undefined') {
                //                 row = row + 1;
                //             } else {
                //                 row = 0;
                //             }
                //             break;
                //         }
                //     }
                //     if (i === ships[index].length - 1) {
                //         flag = false;
                //     }
                // }
            } while (flag);

            // write ship id on the ship under here

            for (let i = 0; i < ships[index].length; i++) {
                board[row + i][col].ship = ships[index].id;

                if (i === 0 && typeof refBoard[row - 1] !== 'undefined') {
                    if (refBoard[row - 1].indexOf(`${row - 1}${col}`) !== -1) {
                        refBoard[row - 1].splice(
                            refBoard[row - 1].indexOf(`${row - 1}${col}`),
                            1,
                        );
                    }

                    if (
                        refBoard[row - 1].indexOf(`${row - 1}${col - 1}`) !== -1
                    ) {
                        refBoard[row - 1].splice(
                            refBoard[row - 1].indexOf(`${row - 1}${col - 1}`),
                            1,
                        );
                    }

                    if (
                        refBoard[row - 1].indexOf(`${row - 1}${col + 1}`) !== -1
                    ) {
                        refBoard[row - 1].splice(
                            refBoard[row - 1].indexOf(`${row - 1}${col + 1}`),
                            1,
                        );
                    }
                }

                refBoard[row + i].splice(
                    refBoard[row + i].indexOf(`${row + i}${col}`),
                    1,
                );
                if (refBoard[row + i].indexOf(`${row + i}${col + 1}`) !== -1) {
                    refBoard[row + i].splice(
                        refBoard[row + i].indexOf(`${row + i}${col + 1}`),
                        1,
                    );
                }

                if (refBoard[row + i].indexOf(`${row + i}${col - 1}`) !== -1) {
                    refBoard[row + i].splice(
                        refBoard[row + i].indexOf(`${row + i}${col - 1}`),
                        1,
                    );
                }

                if (
                    i === ships[index].length - 1 &&
                    typeof refBoard[row + i + 1] !== 'undefined'
                ) {
                    if (
                        refBoard[row + i + 1].indexOf(
                            `${row + i + 1}${col}`,
                        ) !== -1
                    ) {
                        refBoard[row + i + 1].splice(
                            refBoard[row + i + 1].indexOf(
                                `${row + i + 1}${col}`,
                            ),
                            1,
                        );
                    }
                    if (
                        refBoard[row + i + 1].indexOf(
                            `${row + i + 1}${col + 1}`,
                        ) !== -1
                    ) {
                        refBoard[row + i + 1].splice(
                            refBoard[row + i + 1].indexOf(
                                `${row + i + 1}${col + 1}`,
                            ),
                            1,
                        );
                    }

                    if (
                        refBoard[row + i + 1].indexOf(
                            `${row + i + 1}${col - 1}`,
                        ) !== -1
                    ) {
                        refBoard[row + i + 1].splice(
                            refBoard[row + i + 1].indexOf(
                                `${row + i + 1}${col - 1}`,
                            ),
                            1,
                        );
                    }
                }
            }
        }
    }
    if (direction > 5) {
        return `${board[row]}`;
    }
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

// testing again ////////////////////////////////////////////////////////////////////////////////////////////////
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
// const battleship1 = ship(3, 'Battleship1', 'b1');
// const battleship2 = ship(3, 'Battleship2', 'b2');
// const destroyer1 = ship(2, 'Destroyer1', 'd1');
// const destroyer2 = ship(2, 'Destroyer2', 'd2');
// const destroyer3 = ship(2, 'Destroyer3', 'd3');
// const patrolBoat1 = ship(1, 'Patrol Boat1', 'pb1');
// const patrolBoat2 = ship(1, 'Patrol Boat2', 'pb2');
// const patrolBoat3 = ship(1, 'Patrol Boat3', 'pb3');
// const patrolBoat4 = ship(1, 'Patrol Boat4', 'pb4');
// let ships = [
//     carrier,
//     battleship1,
//     battleship2,
//     destroyer1,
//     destroyer2,
//     destroyer3,
//     patrolBoat1,
//     patrolBoat2,
//     patrolBoat3,
//     patrolBoat4,
// ];

// let refBoard = [
//     ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
//     ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
//     ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
//     ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
//     ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
//     ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
//     ['60', '61', '62', '63', '64', '65', '06', '67', '68', '69'],
//     ['70', '71', '72', '73', '04', '75', '76', '77', '78', '79'],
//     ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
//     ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
// ];

// for (let i = 0; i < 10; i++) {
//     let direction = Math.floor(Math.random() * 10);
//     let tempRow;
//     let tempCol;
//     let cords;
//     do {
//         tempRow = Math.floor(Math.random() * refBoard.length);
//         tempCol = Math.floor(Math.random() * refBoard[tempRow].length);
//         cords = refBoard[tempRow][tempCol];
//     } while (typeof refBoard[tempRow][tempCol] === 'undefined');
//     console.log(`i: ${i}`);
//     console.log(`cords: ${cords}`);
//     console.log(`direction: ${direction}`);
//     console.log('--------');
//     placeShips(direction, cords, board, refBoard, ships, i);
// }

// placeShips(3, '04', board, refBoard, ships, 0);
// placeShips(5, '89', board, refBoard, ships, 1);
// placeShips(7, '67', board, refBoard, ships, 2);

// for (let i = 0; i < board.length; i++) {
//     let temp = '';
//     for (let j = 0; j < board[i].length; j++) {
//         temp = `${temp} ${board[i][j].ship}`;
//     }
//     console.log(temp);
// }
// console.log('done');

// testing again ///////////////////////////////////////////////////////////////////////////////////////////

// let attack = gameBoard();
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
// const battleship1 = ship(3, 'Battleship1', 'b1');
// const battleship2 = ship(3, 'Battleship2', 'b2');
// const destroyer1 = ship(2, 'Destroyer1', 'd1');
// const destroyer2 = ship(2, 'Destroyer2', 'd2');
// const destroyer3 = ship(2, 'Destroyer3', 'd3');
// const patrolBoat1 = ship(1, 'Patrol Boat1', 'pb1');
// const patrolBoat2 = ship(1, 'Patrol Boat2', 'pb2');
// const patrolBoat3 = ship(1, 'Patrol Boat3', 'pb3');
// const patrolBoat4 = ship(1, 'Patrol Boat4', 'pb4');
// let ships = [
//     carrier,
//     battleship1,
//     battleship2,
//     destroyer1,
//     destroyer2,
//     destroyer3,
//     patrolBoat1,
//     patrolBoat2,
//     patrolBoat3,
//     patrolBoat4,
// ];
// let refBoard = [
//     ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
//     ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
//     ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
//     ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
//     ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'],
//     ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
//     ['60', '61', '62', '63', '64', '65', '06', '67', '68', '69'],
//     ['70', '71', '72', '73', '04', '75', '76', '77', '78', '79'],
//     ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
//     ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
// ];
// placeShips(6, '76', board, refBoard, ships, 0);
// // c1
// placeShips(3, '08', board, refBoard, ships, 1);
// // b1
// placeShips(3, '20', board, refBoard, ships, 2);
// // b2
// placeShips(6, '15', board, refBoard, ships, 3);
// // d1
// placeShips(3, '12', board, refBoard, ships, 4);
// // d2
// placeShips(3, '63', board, refBoard, ships, 5);
// // d3
// placeShips(3, '81', board, refBoard, ships, 6);
// // pb1
// placeShips(3, '93', board, refBoard, ships, 7);
// // pb2
// placeShips(6, '44', board, refBoard, ships, 8);
// // pb3
// placeShips(6, '99', board, refBoard, ships, 9);
// // pb4
// attack.toTest(board);
// attack.receiveAttack(0, 8);
// attack.receiveAttack(1, 8);
// attack.receiveAttack(2, 8);
// //
// attack.receiveAttack(1, 5);
// attack.receiveAttack(1, 6);
// //
// attack.receiveAttack(1, 2);
// attack.receiveAttack(2, 2);
// //
// attack.receiveAttack(2, 0);
// attack.receiveAttack(3, 0);
// attack.receiveAttack(4, 0);
// //
// attack.receiveAttack(4, 4);
// //
// attack.receiveAttack(6, 3);
// attack.receiveAttack(7, 3);
// //
// attack.receiveAttack(7, 6);
// attack.receiveAttack(7, 7);
// attack.receiveAttack(7, 8);
// attack.receiveAttack(7, 9);
// //
// attack.receiveAttack(8, 1);
// //
// attack.receiveAttack(9, 3);
// //
// attack.receiveAttack(9, 9);

// // for (let i = 0; i < ships.length; i++) {
// //     console.log(ships[i].hasBeenSunk);
// //     console.log(ships[i].gotHit);
// // }

// for (let i = 0; i < attack.board.length; i++) {
//     let temp = '';
//     for (let j = 0; j < attack.board[i].length; j++) {
//         temp = `${temp} ${attack.board[i][j].ship}`;
//     }
//     console.log(`${i}${temp}`);
// }
// console.log(attack.show());
// console.log(attack.gameOver);

export { gameBoard, placeShips };
