import { players, computer } from './players';
import { ship } from './ship';
import './style.css';

window.addEventListener('DOMContentLoaded', () => {
    const player = players('player');
    const computerPlayer = computer();
    let main = document.querySelector('main');
    let playerSection = document.createElement('section');
    let rowIndex = document.createElement('div');
    let colIndex = document.createElement('div');
    let boardContainer = document.createElement('div');
    let playerBoard = [];
    let boardHTMLElements = [];
    let rowArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let colArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let rowIndexCells = [];
    let colIndexCells = [];
    let ships = [
        {
            ship: 'c1',
            length: 4,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'b1',
            length: 3,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'b2',
            length: 3,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'd1',
            length: 2,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'd2',
            length: 2,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'd3',
            length: 2,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'pb1',
            length: 1,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'pb2',
            length: 1,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'pb3',
            length: 1,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
        {
            ship: 'pb4',
            length: 1,
            checked: false,
            colCord1: null,
            colCord2: null,
            rowCord1: null,
            rowCord2: null,
            direction: null,
        },
    ];
    let shipsHTMLElements = [];

    playerSection.classList.add('player-board');
    rowIndex.classList.add('row-index');
    colIndex.classList.add('col-index');
    boardContainer.classList.add('board-container');

    // for (let i = 0; i < ships.length; i++) {
    //     shipsHTMLElements[i] = document.createElement('div');
    //     shipsHTMLElements[i].classList.add(ships[i].ship)
    // }

    for (let i = 0; i < player.board.board.length; i++) {
        for (let j = 0; j < player.board.board[i].length; j++) {
            // playerBoard[i].cols.push({ row: i, col: j, clicked: false });
            boardHTMLElements.push(document.createElement('div'));
            boardHTMLElements[
                boardHTMLElements.indexOf(boardHTMLElements.at(-1))
            ].setAttribute('data-row', i);
            boardHTMLElements[
                boardHTMLElements.indexOf(boardHTMLElements.at(-1))
            ].setAttribute('data-col', j);
            boardHTMLElements[
                boardHTMLElements.indexOf(boardHTMLElements.at(-1))
            ].classList.add('board-cell');
            if (player.board.board[i][j].ship !== null) {
                if (
                    typeof player.board.board[i][j + 1] !== 'undefined' &&
                    player.board.board[i][j + 1].ship !== null
                ) {
                    if (
                        player.board.board[i][j + 1].ship ===
                        player.board.board[i][j].ship
                    ) {
                        for (let k = 0; k < ships.length; k++) {
                            if (
                                ships[k].ship ===
                                    player.board.board[i][j].ship &&
                                ships[k].checked === false
                            ) {
                                ships[k].checked = true;
                                ships[k].colCord1 = j + 1;
                                ships[k].colCord2 = j + ships[k].length + 1;
                                ships[k].rowCord1 = i + 1;
                                ships[k].rowCord2 = i + 2;
                                ships[k].direction = 'right';
                                shipsHTMLElements.push(
                                    document.createElement('div'),
                                );
                                shipsHTMLElements[
                                    shipsHTMLElements.indexOf(
                                        shipsHTMLElements.at(-1),
                                    )
                                ].classList.add(ships[k].ship);
                            }
                        }
                    }
                } else {
                    if (typeof player.board.board[i + 1] !== 'undefined') {
                        if (
                            player.board.board[i + 1][j].ship ===
                            player.board.board[i][j].ship
                        ) {
                            for (let k = 0; k < ships.length; k++) {
                                if (
                                    ships[k].ship ===
                                        player.board.board[i][j].ship &&
                                    ships[k].checked === false
                                ) {
                                    ships[k].checked = true;
                                    ships[k].colCord1 = j + 1;
                                    ships[k].colCord2 = j + 2;
                                    ships[k].rowCord1 = i + 1;
                                    ships[k].rowCord2 = i + ships[k].length + 1;
                                    ships[k].direction = 'down';
                                    shipsHTMLElements.push(
                                        document.createElement('div'),
                                    );
                                    shipsHTMLElements[
                                        shipsHTMLElements.indexOf(
                                            shipsHTMLElements.at(-1),
                                        )
                                    ].classList.add(ships[k].ship);
                                }
                            }
                        } else {
                            for (let k = 0; k < ships.length; k++) {
                                if (
                                    ships[k].ship ===
                                        player.board.board[i][j].ship &&
                                    ships[k].checked === false
                                ) {
                                    ships[k].checked = true;
                                    ships[k].colCord1 = j + 1;
                                    ships[k].colCord2 = j + ships[k].length + 1;
                                    ships[k].rowCord1 = i + 1;
                                    ships[k].rowCord2 = i + ships[k].length + 1;
                                    shipsHTMLElements.push(
                                        document.createElement('div'),
                                    );
                                    shipsHTMLElements[
                                        shipsHTMLElements.indexOf(
                                            shipsHTMLElements.at(-1),
                                        )
                                    ].classList.add(ships[k].ship);
                                }
                            }
                        }
                    } else {
                        for (let k = 0; k < ships.length; k++) {
                            if (
                                ships[k].ship ===
                                    player.board.board[i][j].ship &&
                                ships[k].checked === false
                            ) {
                                ships[k].checked = true;
                                ships[k].colCord1 = j + 1;
                                ships[k].colCord2 = j + ships[k].length + 1;
                                ships[k].rowCord1 = i + 1;
                                ships[k].rowCord2 = i + ships[k].length + 1;
                                shipsHTMLElements.push(
                                    document.createElement('div'),
                                );
                                shipsHTMLElements[
                                    shipsHTMLElements.indexOf(
                                        shipsHTMLElements.at(-1),
                                    )
                                ].classList.add(ships[k].ship);
                            }
                        }
                    }
                }
                boardHTMLElements[
                    boardHTMLElements.indexOf(boardHTMLElements.at(-1))
                ].style.backgroundColor = 'rgba(0,255,0, 0.5)';
            }
        }
    }

    // for (let i = 0; i < player.board.board.length; i++) {
    //     // playerBoard.push({ row: i, cols: [] });
    //     boardHTMLElements.push(document.createElement('div'));
    //     boardHTMLElements[
    //         boardHTMLElements.indexOf(boardHTMLElements.at(-1))
    //     ].setAttribute('data-row', i);
    //     boardHTMLElements[
    //         boardHTMLElements.indexOf(boardHTMLElements.at(-1))
    //     ].classList.add('board-row');
    //     for (let j = 0; j < player.board.board[i].length; j++) {
    //         // playerBoard[i].cols.push({ row: i, col: j, clicked: false });
    //         boardHTMLElements.push(document.createElement('div'));
    //         boardHTMLElements[
    //             boardHTMLElements.indexOf(boardHTMLElements.at(-1))
    //         ].setAttribute('data-row', i);
    //         boardHTMLElements[
    //             boardHTMLElements.indexOf(boardHTMLElements.at(-1))
    //         ].setAttribute('data-col', j);
    //         boardHTMLElements[
    //             boardHTMLElements.indexOf(boardHTMLElements.at(-1))
    //         ].classList.add('board-cell');
    //         if (player.board.board[i][j].ship !== null) {
    //             boardHTMLElements[
    //                 boardHTMLElements.indexOf(boardHTMLElements.at(-1))
    //             ].style.backgroundColor = 'rgba(0,255,0, 0.5)';
    //         }
    //     }
    // }

    for (let i = 0; i < 10; i++) {
        rowIndexCells.push(document.createElement('div'));
        colIndexCells.push(document.createElement('div'));
        rowIndexCells[i].classList.add('row-index-cell');
        colIndexCells[i].classList.add('col-index-cell');
        rowIndexCells[i].textContent = rowArray[i];
        colIndexCells[i].textContent = colArray[i];
        rowIndex.appendChild(rowIndexCells[i]);
        colIndex.appendChild(colIndexCells[i]);
    }

    main.innerHTML = '';
    main.appendChild(playerSection);
    playerSection.appendChild(colIndex);
    playerSection.appendChild(rowIndex);
    playerSection.appendChild(boardContainer);

    for (let i = 0; i < boardHTMLElements.length; i++) {
        let row = boardHTMLElements[i].getAttribute('data-row') * 1;
        let col = boardHTMLElements[i].getAttribute('data-col') * 1;
        boardHTMLElements[i].style.gridRow = `${row + 1} / ${row + 2}`;
        boardHTMLElements[i].style.gridColumn = `${col + 1} / ${col + 2}`;
        boardContainer.appendChild(boardHTMLElements[i]);
    }

    for (let i = 0; i < ships.length; i++) {
        shipsHTMLElements[i].classList.add('ships-element');
        shipsHTMLElements[i].style.gridRow =
            `${ships[i].rowCord1} / ${ships[i].rowCord2}`;

        shipsHTMLElements[i].style.gridColumn =
            `${ships[i].colCord1} / ${ships[i].colCord2}`;

        boardContainer.appendChild(shipsHTMLElements[i]);
    }

    // let divRowIndexPlayer = document.createElement('div');
    // let div;
});
