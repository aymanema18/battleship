import { players, computer } from './players';
import { startGame } from './start-game';

function initDisplay() {
    const player = players('player');
    const computerPlayer = computer();
    let main = document.querySelector('main');
    let playerSection = document.createElement('section');
    let computerSection = document.createElement('section');
    let rowIndex = document.createElement('div');
    let colIndex = document.createElement('div');
    let computerRowIndex = document.createElement('div');
    let computerColIndex = document.createElement('div');
    let boardContainer = document.createElement('div');
    let computerBoardContainer = document.createElement('div');
    let boardHTMLElements = [];
    let computerBoardHTMLElements = [];
    let rowArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let colArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let rowIndexCells = [];
    let colIndexCells = [];
    let computerRowIndexCells = [];
    let computerColIndexCells = [];
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
    let sectionsContainer = document.createElement('div');
    let playButtonContainer = document.createElement('div');
    let playButtonBackground = document.createElement('div');
    let playButton = document.createElement('div');

    playerSection.classList.add('player-board');
    playerSection.classList.add('boards');
    computerSection.classList.add('computer-board');
    computerSection.classList.add('boards');
    rowIndex.classList.add('row-index');
    colIndex.classList.add('col-index');
    computerRowIndex.classList.add('row-index');
    computerColIndex.classList.add('col-index');
    boardContainer.classList.add('board-container');
    computerBoardContainer.classList.add('board-container');
    sectionsContainer.classList.add('sections-container');
    playButtonContainer.classList.add('button-container');
    playButton.classList.add('play-button');
    playButtonBackground.classList.add('play-button-background');

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
            boardHTMLElements[
                boardHTMLElements.indexOf(boardHTMLElements.at(-1))
            ].classList.add('player-board-cell');
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

    for (let i = 0; i < computerPlayer.board.board.length; i++) {
        for (let j = 0; j < computerPlayer.board.board[i].length; j++) {
            // playerBoard[i].cols.push({ row: i, col: j, clicked: false });
            computerBoardHTMLElements.push(document.createElement('div'));
            computerBoardHTMLElements[
                computerBoardHTMLElements.indexOf(
                    computerBoardHTMLElements.at(-1),
                )
            ].setAttribute('data-row', i);
            computerBoardHTMLElements[
                computerBoardHTMLElements.indexOf(
                    computerBoardHTMLElements.at(-1),
                )
            ].setAttribute('data-col', j);
            computerBoardHTMLElements[
                computerBoardHTMLElements.indexOf(
                    computerBoardHTMLElements.at(-1),
                )
            ].classList.add('board-cell');
            computerBoardHTMLElements[
                computerBoardHTMLElements.indexOf(
                    computerBoardHTMLElements.at(-1),
                )
            ].classList.add('computer-board-cell');
            if (computerPlayer.board.board[i][j].ship !== null) {
                if (
                    typeof computerPlayer.board.board[i][j + 1] !==
                        'undefined' &&
                    computerPlayer.board.board[i][j + 1].ship !== null
                ) {
                    if (
                        computerPlayer.board.board[i][j + 1].ship ===
                        computerPlayer.board.board[i][j].ship
                    ) {
                        // for (let k = 0; k < ships.length; k++) {
                        //     if (
                        //         ships[k].ship ===
                        //             player.board.board[i][j].ship &&
                        //         ships[k].checked === false
                        //     ) {
                        //         ships[k].checked = true;
                        //         ships[k].colCord1 = j + 1;
                        //         ships[k].colCord2 = j + ships[k].length + 1;
                        //         ships[k].rowCord1 = i + 1;
                        //         ships[k].rowCord2 = i + 2;
                        //         ships[k].direction = 'right';
                        //         shipsHTMLElements.push(
                        //             document.createElement('div'),
                        //         );
                        //         shipsHTMLElements[
                        //             shipsHTMLElements.indexOf(
                        //                 shipsHTMLElements.at(-1),
                        //             )
                        //         ].classList.add(ships[k].ship);
                        //     }
                        // }
                    }
                } else {
                    if (
                        typeof computerPlayer.board.board[i + 1] !== 'undefined'
                    ) {
                        if (
                            computerPlayer.board.board[i + 1][j].ship ===
                            computerPlayer.board.board[i][j].ship
                        ) {
                            // for (let k = 0; k < ships.length; k++) {
                            //     if (
                            //         ships[k].ship ===
                            //             player.board.board[i][j].ship &&
                            //         ships[k].checked === false
                            //     ) {
                            //         ships[k].checked = true;
                            //         ships[k].colCord1 = j + 1;
                            //         ships[k].colCord2 = j + 2;
                            //         ships[k].rowCord1 = i + 1;
                            //         ships[k].rowCord2 = i + ships[k].length + 1;
                            //         ships[k].direction = 'down';
                            //         shipsHTMLElements.push(
                            //             document.createElement('div'),
                            //         );
                            //         shipsHTMLElements[
                            //             shipsHTMLElements.indexOf(
                            //                 shipsHTMLElements.at(-1),
                            //             )
                            //         ].classList.add(ships[k].ship);
                            //     }
                            // }
                        } else {
                            // for (let k = 0; k < ships.length; k++) {
                            //     if (
                            //         ships[k].ship ===
                            //             player.board.board[i][j].ship &&
                            //         ships[k].checked === false
                            //     ) {
                            //         ships[k].checked = true;
                            //         ships[k].colCord1 = j + 1;
                            //         ships[k].colCord2 = j + ships[k].length + 1;
                            //         ships[k].rowCord1 = i + 1;
                            //         ships[k].rowCord2 = i + ships[k].length + 1;
                            //         shipsHTMLElements.push(
                            //             document.createElement('div'),
                            //         );
                            //         shipsHTMLElements[
                            //             shipsHTMLElements.indexOf(
                            //                 shipsHTMLElements.at(-1),
                            //             )
                            //         ].classList.add(ships[k].ship);
                            //     }
                            // }
                        }
                    } else {
                        // for (let k = 0; k < ships.length; k++) {
                        //     if (
                        //         ships[k].ship ===
                        //             player.board.board[i][j].ship &&
                        //         ships[k].checked === false
                        //     ) {
                        //         ships[k].checked = true;
                        //         ships[k].colCord1 = j + 1;
                        //         ships[k].colCord2 = j + ships[k].length + 1;
                        //         ships[k].rowCord1 = i + 1;
                        //         ships[k].rowCord2 = i + ships[k].length + 1;
                        //         shipsHTMLElements.push(
                        //             document.createElement('div'),
                        //         );
                        //         shipsHTMLElements[
                        //             shipsHTMLElements.indexOf(
                        //                 shipsHTMLElements.at(-1),
                        //             )
                        //         ].classList.add(ships[k].ship);
                        //     }
                        // }
                    }
                }
                // boardHTMLElements[
                //     boardHTMLElements.indexOf(boardHTMLElements.at(-1))
                // ].style.backgroundColor = 'rgba(0,255,0, 0.5)';
            }
        }
    }

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

    for (let i = 0; i < 10; i++) {
        computerRowIndexCells.push(document.createElement('div'));
        computerColIndexCells.push(document.createElement('div'));
        computerRowIndexCells[i].classList.add('row-index-cell');
        computerColIndexCells[i].classList.add('col-index-cell');
        computerRowIndexCells[i].textContent = rowArray[i];
        computerColIndexCells[i].textContent = colArray[i];
        computerRowIndex.appendChild(computerRowIndexCells[i]);
        computerColIndex.appendChild(computerColIndexCells[i]);
    }

    main.innerHTML = '';
    main.appendChild(sectionsContainer);
    main.appendChild(playButtonContainer);
    playButtonContainer.appendChild(playButtonBackground);
    playButtonBackground.appendChild(playButton);
    sectionsContainer.appendChild(playerSection);
    sectionsContainer.appendChild(computerSection);
    playerSection.appendChild(colIndex);
    playerSection.appendChild(rowIndex);
    playerSection.appendChild(boardContainer);
    computerSection.appendChild(computerColIndex);
    computerSection.appendChild(computerRowIndex);
    computerSection.appendChild(computerBoardContainer);

    playButton.innerHTML = 'Play';

    for (let i = 0; i < boardHTMLElements.length; i++) {
        let row = boardHTMLElements[i].getAttribute('data-row') * 1;
        let col = boardHTMLElements[i].getAttribute('data-col') * 1;
        boardHTMLElements[i].style.gridRow = `${row + 1} / ${row + 2}`;
        boardHTMLElements[i].style.gridColumn = `${col + 1} / ${col + 2}`;
        boardContainer.appendChild(boardHTMLElements[i]);
    }

    for (let i = 0; i < computerBoardHTMLElements.length; i++) {
        let row = computerBoardHTMLElements[i].getAttribute('data-row') * 1;
        let col = computerBoardHTMLElements[i].getAttribute('data-col') * 1;
        computerBoardHTMLElements[i].style.gridRow = `${row + 1} / ${row + 2}`;
        computerBoardHTMLElements[i].style.gridColumn =
            `${col + 1} / ${col + 2}`;
        computerBoardContainer.appendChild(computerBoardHTMLElements[i]);
    }
    for (let i = 0; i < ships.length; i++) {
        // let img = document.createElement('img');
        // if (ships[i].length === 4) {
        //     img.src = c;
        // } else if (ships[i].length === 3) {
        //     img.src = b;
        // } else if (ships[i].length === 2) {
        //     img.src = d;
        // } else {
        //     img.src = pb;
        // }
        // img.style.height = '100%';
        // img.style.width = '100%';
        // if (ships[i].direction === 'down') {
        //     img.style.transform = 'rotate(90deg)';
        // }
        shipsHTMLElements[i].classList.add('ships-element');
        shipsHTMLElements[i].style.gridRow =
            `${ships[i].rowCord1} / ${ships[i].rowCord2}`;

        shipsHTMLElements[i].style.gridColumn =
            `${ships[i].colCord1} / ${ships[i].colCord2}`;

        // shipsHTMLElements[i].appendChild(img);
        boardContainer.appendChild(shipsHTMLElements[i]);
    }

    // let divRowIndexPlayer = document.createElement('div');
    // let div;
    startGame(player, computerPlayer);
}

export { initDisplay };
