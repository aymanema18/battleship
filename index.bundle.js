"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["index"],{

/***/ "./src/check-end-game.js":
/*!*******************************!*\
  !*** ./src/check-end-game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameOver: () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _initial_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-display */ "./src/initial-display.js");

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
      (0,_initial_display__WEBPACK_IMPORTED_MODULE_0__.initDisplay)();
    });
    return true;
  }
  return false;
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoard: () => (/* binding */ gameBoard),
/* harmony export */   placeShips: () => (/* binding */ placeShips)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");

function gameBoard() {
  let gameOver = false;
  let board = [[{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }], [{
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }, {
    ship: null
  }]];
  let refBoard = [['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'], ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'], ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'], ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'], ['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'], ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'], ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'], ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'], ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'], ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99']];
  const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(4, 'Carrier', 'c1');
  const battleship1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(3, 'Battleship1', 'b1');
  const battleship2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(3, 'Battleship2', 'b2');
  const destroyer1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(2, 'Destroyer1', 'd1');
  const destroyer2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(2, 'Destroyer2', 'd2');
  const destroyer3 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(2, 'Destroyer3', 'd3');
  const patrolBoat1 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(1, 'Patrol Boat1', 'pb1');
  const patrolBoat2 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(1, 'Patrol Boat2', 'pb2');
  const patrolBoat3 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(1, 'Patrol Boat3', 'pb3');
  const patrolBoat4 = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(1, 'Patrol Boat4', 'pb4');
  let ships = [carrier, battleship1, battleship2, destroyer1, destroyer2, destroyer3, patrolBoat1, patrolBoat2, patrolBoat3, patrolBoat4];
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
    show
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
              refBoard[row].splice(refBoard[row].indexOf(`${row}${col + i}`), ships[index].length + 1);
              if (col > 0) {
                refBoard[row].splice(refBoard[row].indexOf(`${row}${col - 1}`), 1);
              }
              if (typeof board[row + 1] === 'undefined') {
                refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col + i}`), ships[index].length + 1);
                if (col > 0) {
                  refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col - 1}`), 1);
                }
              } else if (typeof board[row - 1] === 'undefined') {
                refBoard[row + 1].splice(refBoard[row + 1].indexOf(`${row + 1}${col + i}`), ships[index].length + 1);
                if (col > 0) {
                  refBoard[row + 1].splice(refBoard[row + 1].indexOf(`${row + 1}${col - 1}`), 1);
                }
              } else {
                refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col + i}`), ships[index].length + 1);
                refBoard[row + 1].splice(refBoard[row + 1].indexOf(`${row + 1}${col + i}`), ships[index].length + 1);
                if (col > 0) {
                  refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col - 1}`), 1);
                  refBoard[row + 1].splice(refBoard[row + 1].indexOf(`${row + 1}${col - 1}`), 1);
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
          refBoard[row].splice(refBoard[row].indexOf(`${row}${col}`), ships[index].length);
          if (col > 0) {
            refBoard[row].splice(refBoard[row].indexOf(`${row}${col - 1}`), 1);
          }
          let cord = [];
          if (row > 0) {
            for (let j = 0; j < ships[index].length; j++) {
              if (refBoard[row - 1].indexOf(`${row - 1}${col + j}`) !== -1) {
                cord.push(`${row - 1}${col + j}`);
              }
            }
            if (col > 0) {
              if (refBoard[row].indexOf(`${row}${col - 1}`) !== -1) {
                cord.push(`${row}${col - 1}`);
              }
              if (refBoard[row - 1].indexOf(`${row - 1}${col - 1}`) !== -1) {
                cord.push(`${row - 1}${col - 1}`);
              }
            }
            if (refBoard[row].indexOf(`${row}${col + ships[index].length}`) !== -1) {
              if (cord.indexOf(`${row}${col + ships[index].length}`) === -1) {
                cord.push(`${row}${col + ships[index].length}`);
              }
            }
            if (refBoard[row - 1].indexOf(`${row - 1}${col + ships[index].length}`) !== -1) {
              cord.push(`${row - 1}${col + ships[index].length}`);
            }
          }
          if (row < 9) {
            for (let j = 0; j < ships[index].length; j++) {
              if (refBoard[row + 1].indexOf(`${row + 1}${col + j}`) !== -1) {
                cord.push(`${row + 1}${col + j}`);
              }
            }
            if (col > 0) {
              if (refBoard[row].indexOf(`${row}${col - 1}`) !== -1) {
                cord.push(`${row}${col - 1}`);
              }
              if (refBoard[row + 1].indexOf(`${row + 1}${col - 1}`) !== -1) {
                cord.push(`${row + 1}${col - 1}`);
              }
            }
            if (refBoard[row].indexOf(`${row}${col + ships[index].length}`) !== -1) {
              if (cord.indexOf(`${row}${col + ships[index].length}`) === -1) {
                cord.push(`${row}${col + ships[index].length}`);
              }
            }
            if (refBoard[row + 1].indexOf(`${row + 1}${col + ships[index].length}`) !== -1) {
              cord.push(`${row + 1}${col + ships[index].length}`);
            }
          }
          for (let j = 0; j < cord.length; j++) {
            refBoard[cord[j][0] * 1].splice(refBoard[cord[j][0] * 1].indexOf(cord[j]), 1);
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
                refBoard[row + j].splice(refBoard[row + j].indexOf(`${row + j}${col}`), 1);
                if (j === 0 && row > 0) {
                  refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col}`), 1);
                }
                if (j === ships[index].length - 1) {
                  if (typeof refBoard[row + j + 1] !== 'undefined') {
                    refBoard[row + j + 1].splice(refBoard[row + j + 1].indexOf(`${row + j + 1}${col}`), 1);
                    if (col > 0) {
                      refBoard[row + j + 1].splice(refBoard[row + j + 1].indexOf(`${row + j + 1}${col - 1}`), 1);
                    }
                    if (col < 9) {
                      refBoard[row + j + 1].splice(refBoard[row + j + 1].indexOf(`${row + j + 1}${col + 1}`), 1);
                    }
                  }
                }
                if (typeof refBoard[row + j][col - 1] !== 'undefined') {
                  refBoard[row + j].splice(refBoard[row + j].indexOf(`${row + j}${col - 1}`), 1);
                  if (j === 0 && row > 0) {
                    refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col - 1}`), 1);
                  }
                }
                if (typeof refBoard[row + j][refBoard[row + j].indexOf(`${row + j}${col + 1}`)] !== 'undefined') {
                  refBoard[row + j].splice(refBoard[row + j].indexOf(`${row + j}${col + 1}`), 1);
                  if (j === 0 && row > 0) {
                    refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col + 1}`), 1);
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
            if (refBoard[row + i].indexOf(`${row + i}${col}`) === -1) {
              if (typeof refBoard[row][col + 1] !== 'undefined') {
                col = col + 1;
                break;
              } else {
                col = 0;
                if (typeof refBoard[row + 1] !== 'undefined' && row + ships[index].length <= 9) {
                  row = row + 1;
                  break;
                } else if (typeof refBoard[row + 1] !== 'undefined' && row + ships[index].length > 9 || typeof refBoard[row + 1] === 'undefined') {
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
            refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col}`), 1);
          }
          if (refBoard[row - 1].indexOf(`${row - 1}${col - 1}`) !== -1) {
            refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col - 1}`), 1);
          }
          if (refBoard[row - 1].indexOf(`${row - 1}${col + 1}`) !== -1) {
            refBoard[row - 1].splice(refBoard[row - 1].indexOf(`${row - 1}${col + 1}`), 1);
          }
        }
        refBoard[row + i].splice(refBoard[row + i].indexOf(`${row + i}${col}`), 1);
        if (refBoard[row + i].indexOf(`${row + i}${col + 1}`) !== -1) {
          refBoard[row + i].splice(refBoard[row + i].indexOf(`${row + i}${col + 1}`), 1);
        }
        if (refBoard[row + i].indexOf(`${row + i}${col - 1}`) !== -1) {
          refBoard[row + i].splice(refBoard[row + i].indexOf(`${row + i}${col - 1}`), 1);
        }
        if (i === ships[index].length - 1 && typeof refBoard[row + i + 1] !== 'undefined') {
          if (refBoard[row + i + 1].indexOf(`${row + i + 1}${col}`) !== -1) {
            refBoard[row + i + 1].splice(refBoard[row + i + 1].indexOf(`${row + i + 1}${col}`), 1);
          }
          if (refBoard[row + i + 1].indexOf(`${row + i + 1}${col + 1}`) !== -1) {
            refBoard[row + i + 1].splice(refBoard[row + i + 1].indexOf(`${row + i + 1}${col + 1}`), 1);
          }
          if (refBoard[row + i + 1].indexOf(`${row + i + 1}${col - 1}`) !== -1) {
            refBoard[row + i + 1].splice(refBoard[row + i + 1].indexOf(`${row + i + 1}${col - 1}`), 1);
          }
        }
      }
    }
  }
  if (direction > 5) {
    return `${board[row]}`;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-display */ "./src/initial-display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


(0,_initial_display__WEBPACK_IMPORTED_MODULE_0__.initDisplay)();

/***/ }),

/***/ "./src/initial-display.js":
/*!********************************!*\
  !*** ./src/initial-display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDisplay: () => (/* binding */ initDisplay)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-game */ "./src/start-game.js");


function initDisplay() {
  const player = (0,_players__WEBPACK_IMPORTED_MODULE_0__.players)('player');
  const computerPlayer = (0,_players__WEBPACK_IMPORTED_MODULE_0__.computer)();
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
  let ships = [{
    ship: 'c1',
    length: 4,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'b1',
    length: 3,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'b2',
    length: 3,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'd1',
    length: 2,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'd2',
    length: 2,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'd3',
    length: 2,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'pb1',
    length: 1,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'pb2',
    length: 1,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'pb3',
    length: 1,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }, {
    ship: 'pb4',
    length: 1,
    checked: false,
    colCord1: null,
    colCord2: null,
    rowCord1: null,
    rowCord2: null,
    direction: null
  }];
  let shipsHTMLElements = [];
  let sectionsContainer = document.createElement('div');
  let playButtonContainer = document.createElement('div');
  let playButtonBackground = document.createElement('div');
  let playButton = document.createElement('div');
  let random = document.createElement('div');
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
  random.classList.add('random');
  random.textContent = 'Random';

  // for (let i = 0; i < ships.length; i++) {
  //     shipsHTMLElements[i] = document.createElement('div');
  //     shipsHTMLElements[i].classList.add(ships[i].ship)
  // }

  for (let i = 0; i < player.board.board.length; i++) {
    for (let j = 0; j < player.board.board[i].length; j++) {
      // playerBoard[i].cols.push({ row: i, col: j, clicked: false });
      boardHTMLElements.push(document.createElement('div'));
      boardHTMLElements[boardHTMLElements.indexOf(boardHTMLElements.at(-1))].setAttribute('data-row', i);
      boardHTMLElements[boardHTMLElements.indexOf(boardHTMLElements.at(-1))].setAttribute('data-col', j);
      boardHTMLElements[boardHTMLElements.indexOf(boardHTMLElements.at(-1))].classList.add('board-cell');
      boardHTMLElements[boardHTMLElements.indexOf(boardHTMLElements.at(-1))].classList.add('player-board-cell');
      if (player.board.board[i][j].ship !== null) {
        if (typeof player.board.board[i][j + 1] !== 'undefined' && player.board.board[i][j + 1].ship !== null) {
          if (player.board.board[i][j + 1].ship === player.board.board[i][j].ship) {
            for (let k = 0; k < ships.length; k++) {
              if (ships[k].ship === player.board.board[i][j].ship && ships[k].checked === false) {
                ships[k].checked = true;
                ships[k].colCord1 = j + 1;
                ships[k].colCord2 = j + ships[k].length + 1;
                ships[k].rowCord1 = i + 1;
                ships[k].rowCord2 = i + 2;
                ships[k].direction = 'right';
                shipsHTMLElements.push(document.createElement('div'));
                shipsHTMLElements[shipsHTMLElements.indexOf(shipsHTMLElements.at(-1))].classList.add(ships[k].ship);
              }
            }
          }
        } else {
          if (typeof player.board.board[i + 1] !== 'undefined') {
            if (player.board.board[i + 1][j].ship === player.board.board[i][j].ship) {
              for (let k = 0; k < ships.length; k++) {
                if (ships[k].ship === player.board.board[i][j].ship && ships[k].checked === false) {
                  ships[k].checked = true;
                  ships[k].colCord1 = j + 1;
                  ships[k].colCord2 = j + 2;
                  ships[k].rowCord1 = i + 1;
                  ships[k].rowCord2 = i + ships[k].length + 1;
                  ships[k].direction = 'down';
                  shipsHTMLElements.push(document.createElement('div'));
                  shipsHTMLElements[shipsHTMLElements.indexOf(shipsHTMLElements.at(-1))].classList.add(ships[k].ship);
                }
              }
            } else {
              for (let k = 0; k < ships.length; k++) {
                if (ships[k].ship === player.board.board[i][j].ship && ships[k].checked === false) {
                  ships[k].checked = true;
                  ships[k].colCord1 = j + 1;
                  ships[k].colCord2 = j + ships[k].length + 1;
                  ships[k].rowCord1 = i + 1;
                  ships[k].rowCord2 = i + ships[k].length + 1;
                  shipsHTMLElements.push(document.createElement('div'));
                  shipsHTMLElements[shipsHTMLElements.indexOf(shipsHTMLElements.at(-1))].classList.add(ships[k].ship);
                }
              }
            }
          } else {
            for (let k = 0; k < ships.length; k++) {
              if (ships[k].ship === player.board.board[i][j].ship && ships[k].checked === false) {
                ships[k].checked = true;
                ships[k].colCord1 = j + 1;
                ships[k].colCord2 = j + ships[k].length + 1;
                ships[k].rowCord1 = i + 1;
                ships[k].rowCord2 = i + ships[k].length + 1;
                shipsHTMLElements.push(document.createElement('div'));
                shipsHTMLElements[shipsHTMLElements.indexOf(shipsHTMLElements.at(-1))].classList.add(ships[k].ship);
              }
            }
          }
        }
        boardHTMLElements[boardHTMLElements.indexOf(boardHTMLElements.at(-1))].style.backgroundColor = 'rgba(0,255,0, 0.5)';
      }
    }
  }
  for (let i = 0; i < computerPlayer.board.board.length; i++) {
    for (let j = 0; j < computerPlayer.board.board[i].length; j++) {
      computerBoardHTMLElements.push(document.createElement('div'));
      computerBoardHTMLElements[computerBoardHTMLElements.indexOf(computerBoardHTMLElements.at(-1))].setAttribute('data-row', i);
      computerBoardHTMLElements[computerBoardHTMLElements.indexOf(computerBoardHTMLElements.at(-1))].setAttribute('data-col', j);
      computerBoardHTMLElements[computerBoardHTMLElements.indexOf(computerBoardHTMLElements.at(-1))].classList.add('board-cell');
      computerBoardHTMLElements[computerBoardHTMLElements.indexOf(computerBoardHTMLElements.at(-1))].classList.add('computer-board-cell');
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
  playerSection.appendChild(random);
  computerSection.appendChild(computerColIndex);
  computerSection.appendChild(computerRowIndex);
  computerSection.appendChild(computerBoardContainer);
  playButton.innerHTML = 'Play';
  random.addEventListener('click', () => {
    initDisplay();
  });
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
    computerBoardHTMLElements[i].style.gridColumn = `${col + 1} / ${col + 2}`;
    computerBoardContainer.appendChild(computerBoardHTMLElements[i]);
  }
  for (let i = 0; i < ships.length; i++) {
    shipsHTMLElements[i].classList.add('ships-element');
    shipsHTMLElements[i].style.gridRow = `${ships[i].rowCord1} / ${ships[i].rowCord2}`;
    shipsHTMLElements[i].style.gridColumn = `${ships[i].colCord1} / ${ships[i].colCord2}`;
    boardContainer.appendChild(shipsHTMLElements[i]);
  }
  (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.startGame)(player, computerPlayer);
}


/***/ }),

/***/ "./src/play-round.js":
/*!***************************!*\
  !*** ./src/play-round.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playRound: () => (/* binding */ playRound)
/* harmony export */ });
/* harmony import */ var _check_end_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-end-game */ "./src/check-end-game.js");

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
  playerCells.forEach(cell => {
    cell.style.cursor = 'auto';
  });
  if (turn === 'player') {
    for (let i = 0; i < computer.board.board.length; i++) {
      for (let j = 0; j < computer.board.board[i].length; j++) {
        if (typeof availableComputerCells[i][availableComputerCells[i].indexOf(`${i}${j}`)] !== 'undefined') {
          let tempCell = document.querySelector(`.computer-board-cell[data-row="${i}"][data-col="${j}"]`);
          tempCell.removeEventListener('click', clickComputerCell);
          tempCell.style.cursor = 'pointer';
        }
      }
    }
    computerCells.forEach(cell => {
      cell.addEventListener('click', clickComputerCell);
    });
  } else {
    let row = Math.floor(Math.random() * availablePlayerCells.length);
    let cords = availablePlayerCells[row][Math.floor(Math.random() * availablePlayerCells[row].length)];
    let cellElement = document.querySelector(`.player-board-cell[data-row="${cords[0] * 1}"][data-col="${cords[1] * 1}"]`);
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
      computerCells.forEach(cell => {
        cell.style.cursor = 'auto';
        cell.removeEventListener('click', clickComputerCell);
      });
    } else if (computer.board.board[row][col].ship === 0) {
      // do nothing
    } else {
      computer.gotHit(row, col);
      this.style.backgroundColor = 'rgb(255,0,0)';
      this.style.cursor = 'auto';
      computerCells.forEach(cell => {
        cell.style.cursor = 'auto';
        cell.removeEventListener('click', clickComputerCell);
      });
    }
    availableComputerCells[row].splice(availableComputerCells[row].indexOf(`${row}${col}`), 1);
    let check = (0,_check_end_game__WEBPACK_IMPORTED_MODULE_0__.gameOver)(computer);
    if (!check) {
      playerCells.forEach(cell => {
        if (typeof availablePlayerCells[cell.getAttribute('data-row') * 1][availablePlayerCells[cell.getAttribute('data-row') * 1].indexOf(`${cell.getAttribute('data-row') * 1}${cell.getAttribute('data-col') * 1}`)] !== 'undefined') {
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
      let cellElement = document.querySelector(`.player-board-cell[data-row="${cords[0] * 1}"][data-col="${cords[1] * 1}"]`);
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
        playerCells.forEach(cell => {
          cell.removeEventListener('click', clickPlayerCell);
        });
      } else if (player.board.board[row][col].ship === 0) {
        // do nothing
      } else {
        player.gotHit(row, col);
        this.style.backgroundColor = 'rgb(0,0,255)';
        playerCells.forEach(cell => {
          cell.removeEventListener('click', clickPlayerCell);
        });
      }
      for (let i = 0; i < computer.board.board.length; i++) {
        for (let j = 0; j < computer.board.board[i].length; j++) {
          if (typeof availableComputerCells[i][availableComputerCells[i].indexOf(`${i}${j}`)] !== 'undefined') {
            let tempCell = document.querySelector(`.computer-board-cell[data-row="${i}"][data-col="${j}"]`);
            tempCell.removeEventListener('click', clickComputerCell);
            tempCell.style.cursor = 'pointer';
          }
        }
      }
      availablePlayerCells[row].splice(availablePlayerCells[row].indexOf(`${row}${col}`), 1);
      let check = (0,_check_end_game__WEBPACK_IMPORTED_MODULE_0__.gameOver)(player);
      if (!check) {
        computerCells.forEach(cell => {
          if (typeof availableComputerCells[cell.getAttribute('data-row') * 1][availableComputerCells[cell.getAttribute('data-row') * 1].indexOf(`${cell.getAttribute('data-row') * 1}${cell.getAttribute('data-col') * 1}`)] !== 'undefined') {
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', clickComputerCell);
          }
        });
      }
    }, 500);
  }
}


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computer: () => (/* binding */ computer),
/* harmony export */   players: () => (/* binding */ players)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");

function players(name) {
  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();
  function gotHit(cord1, cord2) {
    board.receiveAttack(cord1, cord2);
  }
  return {
    name,
    get board() {
      return board;
    },
    gotHit
  };
}
function computer() {
  let name = 'Computer';
  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)();
  function gotHit(cord1, cord2) {
    board.receiveAttack(cord1, cord2);
  }
  return {
    name,
    get board() {
      return board;
    },
    gotHit
  };
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleship: () => (/* binding */ battleship),
/* harmony export */   carrier: () => (/* binding */ carrier),
/* harmony export */   destroyer: () => (/* binding */ destroyer),
/* harmony export */   patrolBoat: () => (/* binding */ patrolBoat),
/* harmony export */   ship: () => (/* binding */ ship)
/* harmony export */ });
function ship(length, name, id) {
  let gotHit = 0;
  let hasBeenSunk = false;
  function hit() {
    if (!hasBeenSunk) {
      gotHit++;
      let msg = isSunk();
      if (hasBeenSunk) {
        return msg;
      }
      return `${name} got hit`;
    }
  }
  function isSunk() {
    if (gotHit === length) {
      hasBeenSunk = true;
      return `${name} is sunk`;
    }
  }
  return {
    length,
    get gotHit() {
      return gotHit;
    },
    get hasBeenSunk() {
      return hasBeenSunk;
    },
    hit,
    id
  };
}
const carrier = ship(4, 'Carrier', 'c1');
const battleship = ship(3, 'Battleship', 'b1');
const destroyer = ship(2, 'Destroyer', 'd1');
const patrolBoat = ship(1, 'Patrol Boat', 'pb1');


/***/ }),

/***/ "./src/start-game.js":
/*!***************************!*\
  !*** ./src/start-game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _play_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-round */ "./src/play-round.js");

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
      (0,_play_round__WEBPACK_IMPORTED_MODULE_0__.playRound)(turn, player, computer);
    } else {
      turn = 'computer';
      (0,_play_round__WEBPACK_IMPORTED_MODULE_0__.playRound)(turn, player, computer);
    }
  });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Inter-VariableFont_opsz,wght.ttf */ "./src/fonts/Inter-VariableFont_opsz,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'inter';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    box-sizing: border-box;
}

:root {
    --cell-size: 30px;
}

body {
    display: flex;
    flex-direction: column;
    font-family: 'inter', Arial, Helvetica, sans-serif;
    justify-content: stretch;
    align-items: center;
    height: 100vh;
    color: white;
    background-color: #609bf5;
}

header {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 50px;
}

.logo {
    font-size: 25px;
    font-weight: 700;
}

main {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(2, min-content);
    grid-template-rows: min-content 150px;
    justify-content: center;
    grid-gap: 75px; */
}

.sections-container {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    justify-content: center;
    grid-gap: 75px;
}

.board-cell,
.board-container {
    border: 1px solid white;
}

.board-cell,
.ships-element {
    /* cursor: pointer; */
}

.boards {
    display: grid;
    grid-template-columns: var(--cell-size) calc(var(--cell-size) * 10);
    grid-template-rows: repeat(11, var(--cell-size));
}

.row-index {
    display: grid;
    grid-template-rows: repeat(10, var(--cell-size));
    grid-row: 2 / 12;
    justify-content: center;
    justify-items: end;
    align-items: center;
    font-weight: 700;
}

.col-index {
    display: grid;
    grid-template-columns: repeat(10, var(--cell-size));
    grid-column: 2 / 3;
    justify-items: center;
    align-items: end;
    font-weight: 700;
}

.board-container {
    display: grid;
    grid-template-columns: repeat(10, var(--cell-size));
    grid-template-rows: repeat(10, var(--cell-size));
    grid-row: 2 / 12;
    grid-column: 2 / 3;
}

.ships-element {
    background-color: rgba(0, 230, 0, 0.5);
}

.button-container {
    display: flex;
    justify-content: center;
    padding: 30px 0;
}

.play-button-background {
    background-color: #524e4e;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.play-button {
    cursor: pointer;
    background-color: #ff0000;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
}

.play-button:active {
    height: 40px;
    width: 40px;
    font-size: 12px;
}

.play-button,
.play-button-background {
    border-radius: 50%;
}

.new-game-button {
    cursor: pointer;
    font-weight: 700;
}

.random {
    grid-column: 2 / 3;
    justify-self: center;
    font-weight: 700;
    padding-top: 8px;
    cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAmD;AACvD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kDAAkD;IAClD,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB;;;qBAGiB;AACrB;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,uBAAuB;IACvB,cAAc;AAClB;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mEAAmE;IACnE,gDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,gDAAgD;IAChD,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mDAAmD;IACnD,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mDAAmD;IACnD,gDAAgD;IAChD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'inter';\n    src: url(./fonts/Inter-VariableFont_opsz\\,wght.ttf);\n}\n\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --cell-size: 30px;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: 'inter', Arial, Helvetica, sans-serif;\n    justify-content: stretch;\n    align-items: center;\n    height: 100vh;\n    color: white;\n    background-color: #609bf5;\n}\n\nheader {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 50px;\n}\n\n.logo {\n    font-size: 25px;\n    font-weight: 700;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    /* grid-template-columns: repeat(2, min-content);\n    grid-template-rows: min-content 150px;\n    justify-content: center;\n    grid-gap: 75px; */\n}\n\n.sections-container {\n    display: grid;\n    grid-template-columns: repeat(2, min-content);\n    justify-content: center;\n    grid-gap: 75px;\n}\n\n.board-cell,\n.board-container {\n    border: 1px solid white;\n}\n\n.board-cell,\n.ships-element {\n    /* cursor: pointer; */\n}\n\n.boards {\n    display: grid;\n    grid-template-columns: var(--cell-size) calc(var(--cell-size) * 10);\n    grid-template-rows: repeat(11, var(--cell-size));\n}\n\n.row-index {\n    display: grid;\n    grid-template-rows: repeat(10, var(--cell-size));\n    grid-row: 2 / 12;\n    justify-content: center;\n    justify-items: end;\n    align-items: center;\n    font-weight: 700;\n}\n\n.col-index {\n    display: grid;\n    grid-template-columns: repeat(10, var(--cell-size));\n    grid-column: 2 / 3;\n    justify-items: center;\n    align-items: end;\n    font-weight: 700;\n}\n\n.board-container {\n    display: grid;\n    grid-template-columns: repeat(10, var(--cell-size));\n    grid-template-rows: repeat(10, var(--cell-size));\n    grid-row: 2 / 12;\n    grid-column: 2 / 3;\n}\n\n.ships-element {\n    background-color: rgba(0, 230, 0, 0.5);\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    padding: 30px 0;\n}\n\n.play-button-background {\n    background-color: #524e4e;\n    height: 60px;\n    width: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.play-button {\n    cursor: pointer;\n    background-color: #ff0000;\n    height: 45px;\n    width: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n}\n\n.play-button:active {\n    height: 40px;\n    width: 40px;\n    font-size: 12px;\n}\n\n.play-button,\n.play-button-background {\n    border-radius: 50%;\n}\n\n.new-game-button {\n    cursor: pointer;\n    font-weight: 700;\n}\n\n.random {\n    grid-column: 2 / 3;\n    justify-self: center;\n    font-weight: 700;\n    padding-top: 8px;\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Inter-VariableFont_opsz,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_opsz,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e05c5f3d1fa6a3893d84.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBRWhELFNBQVNDLFFBQVFBLENBQUNDLE1BQU0sRUFBRTtFQUN0QixJQUFJQSxNQUFNLENBQUNDLEtBQUssQ0FBQ0YsUUFBUSxFQUFFO0lBQ3ZCLElBQUlHLG1CQUFtQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNyRSxJQUFJQyxvQkFBb0IsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hELElBQUlDLGFBQWEsR0FBR0osUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2pELElBQUlFLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3pDLElBQUlLLENBQUMsR0FBR04sUUFBUSxDQUFDRyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBRW5DRCxvQkFBb0IsQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDNURKLGFBQWEsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUNKLGFBQWEsQ0FBQ0ssU0FBUyxHQUFHLFVBQVU7SUFDcENWLG1CQUFtQixDQUFDVyxXQUFXLENBQUNOLGFBQWEsQ0FBQztJQUM5Q0UsQ0FBQyxDQUFDSyxLQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRO0lBQzVCTixDQUFDLENBQUNLLEtBQUssQ0FBQ0UsVUFBVSxHQUFHLEtBQUs7SUFFMUIsSUFBSWhCLE1BQU0sQ0FBQ2lCLElBQUksS0FBSyxVQUFVLEVBQUU7TUFDNUJSLENBQUMsQ0FBQ1MsU0FBUyxHQUFHLFNBQVM7TUFDdkJWLElBQUksQ0FBQ1csWUFBWSxDQUFDVixDQUFDLEVBQUVELElBQUksQ0FBQ1ksVUFBVSxDQUFDO0lBQ3pDLENBQUMsTUFBTTtNQUNIWCxDQUFDLENBQUNTLFNBQVMsR0FBRyxVQUFVO01BQ3hCVixJQUFJLENBQUNXLFlBQVksQ0FBQ1YsQ0FBQyxFQUFFRCxJQUFJLENBQUNZLFVBQVUsQ0FBQztJQUN6QztJQUVBYixhQUFhLENBQUNjLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQzFDdkIsNkRBQVcsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUVGLE9BQU8sSUFBSTtFQUNmO0VBRUEsT0FBTyxLQUFLO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDaUM7QUFFakMsU0FBU3lCLFNBQVNBLENBQUEsRUFBRztFQUNqQixJQUFJeEIsUUFBUSxHQUFHLEtBQUs7RUFDcEIsSUFBSUUsS0FBSyxHQUFHLENBQ1IsQ0FDSTtJQUFFcUIsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixFQUNELENBQ0k7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNkO0lBQUVBLElBQUksRUFBRTtFQUFLLENBQUMsRUFDZDtJQUFFQSxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ2Q7SUFBRUEsSUFBSSxFQUFFO0VBQUssQ0FBQyxDQUNqQixDQUNKO0VBQ0QsSUFBSUUsUUFBUSxHQUFHLENBQ1gsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUQsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFB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Q0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jaGVjay1lbmQtZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5pdGlhbC1kaXNwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXktcm91bmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0YXJ0LWdhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXREaXNwbGF5IH0gZnJvbSAnLi9pbml0aWFsLWRpc3BsYXknO1xuXG5mdW5jdGlvbiBnYW1lT3ZlcihwbGF5ZXIpIHtcbiAgICBpZiAocGxheWVyLmJvYXJkLmdhbWVPdmVyKSB7XG4gICAgICAgIGxldCBwbGF5QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHBsYXlCdXR0b25CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBwbGF5QnV0dG9uQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdwbGF5LWJ1dHRvbi1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYnV0dG9uJyk7XG4gICAgICAgIG5ld0dhbWVCdXR0b24uaW5uZXJUZXh0ID0gJ05ldyBnYW1lJztcbiAgICAgICAgcGxheUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdHYW1lQnV0dG9uKTtcbiAgICAgICAgcC5zdHlsZS5hbGlnblNlbGYgPSAnY2VudGVyJztcbiAgICAgICAgcC5zdHlsZS5mb250V2VpZ2h0ID0gJzcwMCc7XG5cbiAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICAgICAgICBwLmlubmVySFRNTCA9ICdZb3Ugd29uJztcbiAgICAgICAgICAgIG1haW4uaW5zZXJ0QmVmb3JlKHAsIG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwLmlubmVySFRNTCA9ICdZb3UgbG9zdCc7XG4gICAgICAgICAgICBtYWluLmluc2VydEJlZm9yZShwLCBtYWluLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGluaXREaXNwbGF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHsgZ2FtZU92ZXIgfTtcbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xuXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IGJvYXJkID0gW1xuICAgICAgICBbXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCB9LFxuICAgICAgICAgICAgeyBzaGlwOiBudWxsIH0sXG4gICAgICAgICAgICB7IHNoaXA6IG51bGwgfSxcbiAgICAgICAgXSxcbiAgICBdO1xuICAgIGxldCByZWZCb2FyZCA9IFtcbiAgICAgICAgWycwMCcsICcwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOSddLFxuICAgICAgICBbJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5J10sXG4gICAgICAgIFsnMjAnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjQnLCAnMjUnLCAnMjYnLCAnMjcnLCAnMjgnLCAnMjknXSxcbiAgICAgICAgWyczMCcsICczMScsICczMicsICczMycsICczNCcsICczNScsICczNicsICczNycsICczOCcsICczOSddLFxuICAgICAgICBbJzQwJywgJzQxJywgJzQyJywgJzQzJywgJzQ0JywgJzQ1JywgJzQ2JywgJzQ3JywgJzQ4JywgJzQ5J10sXG4gICAgICAgIFsnNTAnLCAnNTEnLCAnNTInLCAnNTMnLCAnNTQnLCAnNTUnLCAnNTYnLCAnNTcnLCAnNTgnLCAnNTknXSxcbiAgICAgICAgWyc2MCcsICc2MScsICc2MicsICc2MycsICc2NCcsICc2NScsICc2NicsICc2NycsICc2OCcsICc2OSddLFxuICAgICAgICBbJzcwJywgJzcxJywgJzcyJywgJzczJywgJzc0JywgJzc1JywgJzc2JywgJzc3JywgJzc4JywgJzc5J10sXG4gICAgICAgIFsnODAnLCAnODEnLCAnODInLCAnODMnLCAnODQnLCAnODUnLCAnODYnLCAnODcnLCAnODgnLCAnODknXSxcbiAgICAgICAgWyc5MCcsICc5MScsICc5MicsICc5MycsICc5NCcsICc5NScsICc5NicsICc5NycsICc5OCcsICc5OSddLFxuICAgIF07XG4gICAgY29uc3QgY2FycmllciA9IHNoaXAoNCwgJ0NhcnJpZXInLCAnYzEnKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwMSA9IHNoaXAoMywgJ0JhdHRsZXNoaXAxJywgJ2IxJyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcDIgPSBzaGlwKDMsICdCYXR0bGVzaGlwMicsICdiMicpO1xuICAgIGNvbnN0IGRlc3Ryb3llcjEgPSBzaGlwKDIsICdEZXN0cm95ZXIxJywgJ2QxJyk7XG4gICAgY29uc3QgZGVzdHJveWVyMiA9IHNoaXAoMiwgJ0Rlc3Ryb3llcjInLCAnZDInKTtcbiAgICBjb25zdCBkZXN0cm95ZXIzID0gc2hpcCgyLCAnRGVzdHJveWVyMycsICdkMycpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQxID0gc2hpcCgxLCAnUGF0cm9sIEJvYXQxJywgJ3BiMScpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQyID0gc2hpcCgxLCAnUGF0cm9sIEJvYXQyJywgJ3BiMicpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQzID0gc2hpcCgxLCAnUGF0cm9sIEJvYXQzJywgJ3BiMycpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQ0ID0gc2hpcCgxLCAnUGF0cm9sIEJvYXQ0JywgJ3BiNCcpO1xuICAgIGxldCBzaGlwcyA9IFtcbiAgICAgICAgY2FycmllcixcbiAgICAgICAgYmF0dGxlc2hpcDEsXG4gICAgICAgIGJhdHRsZXNoaXAyLFxuICAgICAgICBkZXN0cm95ZXIxLFxuICAgICAgICBkZXN0cm95ZXIyLFxuICAgICAgICBkZXN0cm95ZXIzLFxuICAgICAgICBwYXRyb2xCb2F0MSxcbiAgICAgICAgcGF0cm9sQm9hdDIsXG4gICAgICAgIHBhdHJvbEJvYXQzLFxuICAgICAgICBwYXRyb2xCb2F0NCxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB0ZW1wUm93O1xuICAgICAgICBsZXQgdGVtcENvbDtcbiAgICAgICAgbGV0IGNvcmRzO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB0ZW1wUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVmQm9hcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIHRlbXBDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZWZCb2FyZFt0ZW1wUm93XS5sZW5ndGgpO1xuICAgICAgICAgICAgY29yZHMgPSByZWZCb2FyZFt0ZW1wUm93XVt0ZW1wQ29sXTtcbiAgICAgICAgfSB3aGlsZSAodHlwZW9mIHJlZkJvYXJkW3RlbXBSb3ddW3RlbXBDb2xdID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIHBsYWNlU2hpcHMoZGlyZWN0aW9uLCBjb3JkcywgYm9hcmQsIHJlZkJvYXJkLCBzaGlwcywgaSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb3JkMSwgY29yZDIpIHtcbiAgICAgICAgaWYgKGJvYXJkW2NvcmQxXVtjb3JkMl0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYm9hcmRbY29yZDFdW2NvcmQyXS5zaGlwID0gMDtcbiAgICAgICAgICAgIHJldHVybiAnQXR0YWNrIG1pc3NlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbY29yZDFdW2NvcmQyXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmRbY29yZDFdW2NvcmQyXS5zaGlwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdubyBubyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmlkID09PSBib2FyZFtjb3JkMV1bY29yZDJdLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gc2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLmhhc0JlZW5TdW5rICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b1Rlc3QobmV3Qm9hcmQpIHtcbiAgICAgICAgYm9hcmQgPSBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgICByZXR1cm4gZ2FtZU92ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZ2FtZU92ZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHRvVGVzdCxcbiAgICAgICAgc2hvdyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzKGRpcmVjdGlvbiwgY29yZHMsIGJvYXJkLCByZWZCb2FyZCwgc2hpcHMsIGluZGV4KSB7XG4gICAgbGV0IHJvdyA9IGNvcmRzWzBdICogMTtcbiAgICBsZXQgY29sID0gY29yZHNbMV0gKiAxO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA+IDUpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbCArIHNoaXBzW2luZGV4XS5sZW5ndGggLSAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1tpbmRleF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sICsgaV0uc2hpcCA9IHNoaXBzW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93XS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3Jvd10uaW5kZXhPZihgJHtyb3d9JHtjb2wgKyBpfWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0ubGVuZ3RoICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3Jvd10uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93XS5pbmRleE9mKGAke3Jvd30ke2NvbCAtIDF9YCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRbcm93ICsgMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93IC0gMX0ke2NvbCArIGl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0ubGVuZ3RoICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyAtIDF9JHtjb2wgLSAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW3JvdyAtIDFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyArIDF9JHtjb2wgKyBpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNbaW5kZXhdLmxlbmd0aCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIDFdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyAxfSR7Y29sIC0gMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgLSAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgLSAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyAtIDF9JHtjb2wgKyBpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNbaW5kZXhdLmxlbmd0aCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIDFdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93ICsgMX0ke2NvbCArIGl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0ubGVuZ3RoICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyAtIDF9JHtjb2wgLSAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIDFdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyAxfSR7Y29sIC0gMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChmbGFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW2luZGV4XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVmQm9hcmRbcm93XS5pbmRleE9mKGAke3Jvd30ke2NvbCArIGl9YCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZkJvYXJkW3Jvd11bY29sICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gY29sICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZkJvYXJkW3JvdyArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgPSByb3cgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBzaGlwc1tpbmRleF0ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoZmxhZyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW2luZGV4XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sICsgaV0uc2hpcCA9IHNoaXBzW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3ddLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3Jvd10uaW5kZXhPZihgJHtyb3d9JHtjb2x9YCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpbmRleF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3ddLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3ddLmluZGV4T2YoYCR7cm93fSR7Y29sIC0gMX1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3JkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzW2luZGV4XS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyAtIDF9JHtjb2wgKyBqfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmQucHVzaChgJHtyb3cgLSAxfSR7Y29sICsgan1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93XS5pbmRleE9mKGAke3Jvd30ke2NvbCAtIDF9YCkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmQucHVzaChgJHtyb3d9JHtjb2wgLSAxfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgLSAxfSR7Y29sIC0gMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JkLnB1c2goYCR7cm93IC0gMX0ke2NvbCAtIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93XS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3d9JHtjb2wgKyBzaGlwc1tpbmRleF0ubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZC5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93fSR7Y29sICsgc2hpcHNbaW5kZXhdLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JkLnB1c2goYCR7cm93fSR7Y29sICsgc2hpcHNbaW5kZXhdLmxlbmd0aH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93IC0gMX0ke2NvbCArIHNoaXBzW2luZGV4XS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZC5wdXNoKGAke3JvdyAtIDF9JHtjb2wgKyBzaGlwc1tpbmRleF0ubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaW5kZXhdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93ICsgMX0ke2NvbCArIGp9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZC5wdXNoKGAke3JvdyArIDF9JHtjb2wgKyBqfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3ddLmluZGV4T2YoYCR7cm93fSR7Y29sIC0gMX1gKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZC5wdXNoKGAke3Jvd30ke2NvbCAtIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyArIDF9JHtjb2wgLSAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmQucHVzaChgJHtyb3cgKyAxfSR7Y29sIC0gMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3ddLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Jvd30ke2NvbCArIHNoaXBzW2luZGV4XS5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JkLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3d9JHtjb2wgKyBzaGlwc1tpbmRleF0ubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmQucHVzaChgJHtyb3d9JHtjb2wgKyBzaGlwc1tpbmRleF0ubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyAxfSR7Y29sICsgc2hpcHNbaW5kZXhdLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JkLnB1c2goYCR7cm93ICsgMX0ke2NvbCArIHNoaXBzW2luZGV4XS5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3JkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtjb3JkW2pdWzBdICogMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW2NvcmRbal1bMF0gKiAxXS5pbmRleE9mKGNvcmRbal0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIHNoaXBzW2luZGV4XS5sZW5ndGggLSAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1tpbmRleF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3JvdyArIGldW2NvbF0uc2hpcCA9IHNoaXBzW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpbmRleF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgal0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgal0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBqfSR7Y29sfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDAgJiYgcm93ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyAtIDF9JHtjb2x9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBzaGlwc1tpbmRleF0ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZWZCb2FyZFtyb3cgKyBqICsgMV0gIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGogKyAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGogKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93ICsgaiArIDF9JHtjb2x9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgaiArIDFdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGogKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyArIGogKyAxfSR7Y29sIC0gMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGogKyAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBqICsgMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBqICsgMX0ke2NvbCArIDF9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVmQm9hcmRbcm93ICsgal1bY29sIC0gMV0gIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGpdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBqXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBqfSR7Y29sIC0gMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCAmJiByb3cgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgLSAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93IC0gMX0ke2NvbCAtIDF9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZWZCb2FyZFtyb3cgKyBqXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBqXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBqfSR7Y29sICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgal0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGpdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyArIGp9JHtjb2wgKyAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAwICYmIHJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgLSAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgLSAxfSR7Y29sICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChmbGFnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgc2hpcHNbaW5kZXhdLmxlbmd0aCAtIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW2luZGV4XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGldLmluZGV4T2YoYCR7cm93ICsgaX0ke2NvbH1gKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmQm9hcmRbcm93XVtjb2wgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gY29sICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJlZkJvYXJkW3JvdyArIDFdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93ICsgc2hpcHNbaW5kZXhdLmxlbmd0aCA8PSA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gcm93ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiByZWZCb2FyZFtyb3cgKyAxXSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgKyBzaGlwc1tpbmRleF0ubGVuZ3RoID4gOSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZWZCb2FyZFtyb3cgKyAxXSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc2hpcHNbaW5kZXhdLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSByb3cgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsZXQgcmVmQ29sID0gcmVmQm9hcmRbcm93XVtjb2xdWzFdICogMTtcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW2luZGV4XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdGVtcFJlZkNvbCA9IHJlZkJvYXJkW3JvdyArIGldW2NvbF1bMF0gKiAxO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAocmVmQ29sICsgaSAhPT0gdGVtcFJlZkNvbCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiByZWZCb2FyZFtyb3cgKyAxXVtjb2xdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbCA9IGNvbCArIDE7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZCb2FyZFtyb3cgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcm93ID0gcm93ICsgMTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaSA9PT0gc2hpcHNbaW5kZXhdLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKGZsYWcpO1xuXG4gICAgICAgICAgICAvLyB3cml0ZSBzaGlwIGlkIG9uIHRoZSBzaGlwIHVuZGVyIGhlcmVcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1tpbmRleF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdLnNoaXAgPSBzaGlwc1tpbmRleF0uaWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiB0eXBlb2YgcmVmQm9hcmRbcm93IC0gMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZCb2FyZFtyb3cgLSAxXS5pbmRleE9mKGAke3JvdyAtIDF9JHtjb2x9YCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgLSAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uaW5kZXhPZihgJHtyb3cgLSAxfSR7Y29sfWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uaW5kZXhPZihgJHtyb3cgLSAxfSR7Y29sIC0gMX1gKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgLSAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uaW5kZXhPZihgJHtyb3cgLSAxfSR7Y29sIC0gMX1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoYCR7cm93IC0gMX0ke2NvbCArIDF9YCkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93IC0gMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyAtIDFdLmluZGV4T2YoYCR7cm93IC0gMX0ke2NvbCArIDF9YCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGldLmluZGV4T2YoYCR7cm93ICsgaX0ke2NvbH1gKSxcbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChyZWZCb2FyZFtyb3cgKyBpXS5pbmRleE9mKGAke3JvdyArIGl9JHtjb2wgKyAxfWApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpXS5pbmRleE9mKGAke3JvdyArIGl9JHtjb2wgKyAxfWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVmQm9hcmRbcm93ICsgaV0uaW5kZXhPZihgJHtyb3cgKyBpfSR7Y29sIC0gMX1gKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgaV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgaV0uaW5kZXhPZihgJHtyb3cgKyBpfSR7Y29sIC0gMX1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBpID09PSBzaGlwc1tpbmRleF0ubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVmQm9hcmRbcm93ICsgaSArIDFdICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpICsgMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBpICsgMX0ke2NvbH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpICsgMV0uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGkgKyAxXS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBpICsgMX0ke2NvbH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgaSArIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93ICsgaSArIDF9JHtjb2wgKyAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkJvYXJkW3JvdyArIGkgKyAxXS5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgaSArIDFdLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3JvdyArIGkgKyAxfSR7Y29sICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpICsgMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtyb3cgKyBpICsgMX0ke2NvbCAtIDF9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmQm9hcmRbcm93ICsgaSArIDFdLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZCb2FyZFtyb3cgKyBpICsgMV0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cm93ICsgaSArIDF9JHtjb2wgLSAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID4gNSkge1xuICAgICAgICByZXR1cm4gYCR7Ym9hcmRbcm93XX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgZ2FtZUJvYXJkLCBwbGFjZVNoaXBzIH07XG4iLCJpbXBvcnQgeyBpbml0RGlzcGxheSB9IGZyb20gJy4vaW5pdGlhbC1kaXNwbGF5JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbml0RGlzcGxheSgpO1xuIiwiaW1wb3J0IHsgcGxheWVycywgY29tcHV0ZXIgfSBmcm9tICcuL3BsYXllcnMnO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSAnLi9zdGFydC1nYW1lJztcblxuZnVuY3Rpb24gaW5pdERpc3BsYXkoKSB7XG4gICAgY29uc3QgcGxheWVyID0gcGxheWVycygncGxheWVyJyk7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBjb21wdXRlcigpO1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGxldCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGxldCBjb21wdXRlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbGV0IHJvd0luZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbEluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGNvbXB1dGVyUm93SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29tcHV0ZXJDb2xJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBjb21wdXRlckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJvYXJkSFRNTEVsZW1lbnRzID0gW107XG4gICAgbGV0IGNvbXB1dGVyQm9hcmRIVE1MRWxlbWVudHMgPSBbXTtcbiAgICBsZXQgcm93QXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICAgIGxldCBjb2xBcnJheSA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGxldCByb3dJbmRleENlbGxzID0gW107XG4gICAgbGV0IGNvbEluZGV4Q2VsbHMgPSBbXTtcbiAgICBsZXQgY29tcHV0ZXJSb3dJbmRleENlbGxzID0gW107XG4gICAgbGV0IGNvbXB1dGVyQ29sSW5kZXhDZWxscyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogJ2MxJyxcbiAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sQ29yZDE6IG51bGwsXG4gICAgICAgICAgICBjb2xDb3JkMjogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQxOiBudWxsLFxuICAgICAgICAgICAgcm93Q29yZDI6IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6ICdiMScsXG4gICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbENvcmQxOiBudWxsLFxuICAgICAgICAgICAgY29sQ29yZDI6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQyOiBudWxsLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiAnYjInLFxuICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIGNvbENvcmQyOiBudWxsLFxuICAgICAgICAgICAgcm93Q29yZDE6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMjogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogJ2QxJyxcbiAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sQ29yZDE6IG51bGwsXG4gICAgICAgICAgICBjb2xDb3JkMjogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQxOiBudWxsLFxuICAgICAgICAgICAgcm93Q29yZDI6IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6ICdkMicsXG4gICAgICAgICAgICBsZW5ndGg6IDIsXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbENvcmQxOiBudWxsLFxuICAgICAgICAgICAgY29sQ29yZDI6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQyOiBudWxsLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiAnZDMnLFxuICAgICAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIGNvbENvcmQyOiBudWxsLFxuICAgICAgICAgICAgcm93Q29yZDE6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMjogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogJ3BiMScsXG4gICAgICAgICAgICBsZW5ndGg6IDEsXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbENvcmQxOiBudWxsLFxuICAgICAgICAgICAgY29sQ29yZDI6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQyOiBudWxsLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzaGlwOiAncGIyJyxcbiAgICAgICAgICAgIGxlbmd0aDogMSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29sQ29yZDE6IG51bGwsXG4gICAgICAgICAgICBjb2xDb3JkMjogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQxOiBudWxsLFxuICAgICAgICAgICAgcm93Q29yZDI6IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNoaXA6ICdwYjMnLFxuICAgICAgICAgICAgbGVuZ3RoOiAxLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2xDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIGNvbENvcmQyOiBudWxsLFxuICAgICAgICAgICAgcm93Q29yZDE6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMjogbnVsbCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2hpcDogJ3BiNCcsXG4gICAgICAgICAgICBsZW5ndGg6IDEsXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbENvcmQxOiBudWxsLFxuICAgICAgICAgICAgY29sQ29yZDI6IG51bGwsXG4gICAgICAgICAgICByb3dDb3JkMTogbnVsbCxcbiAgICAgICAgICAgIHJvd0NvcmQyOiBudWxsLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgbGV0IHNoaXBzSFRNTEVsZW1lbnRzID0gW107XG4gICAgbGV0IHNlY3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHBsYXlCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcGxheUJ1dHRvbkJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCByYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGxheWVyLWJvYXJkJyk7XG4gICAgcGxheWVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdib2FyZHMnKTtcbiAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYm9hcmRzJyk7XG4gICAgcm93SW5kZXguY2xhc3NMaXN0LmFkZCgncm93LWluZGV4Jyk7XG4gICAgY29sSW5kZXguY2xhc3NMaXN0LmFkZCgnY29sLWluZGV4Jyk7XG4gICAgY29tcHV0ZXJSb3dJbmRleC5jbGFzc0xpc3QuYWRkKCdyb3ctaW5kZXgnKTtcbiAgICBjb21wdXRlckNvbEluZGV4LmNsYXNzTGlzdC5hZGQoJ2NvbC1pbmRleCcpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbXB1dGVyQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gICAgc2VjdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbnMtY29udGFpbmVyJyk7XG4gICAgcGxheUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG4gICAgcGxheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWJ1dHRvbicpO1xuICAgIHBsYXlCdXR0b25CYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3BsYXktYnV0dG9uLWJhY2tncm91bmQnKTtcbiAgICByYW5kb20uY2xhc3NMaXN0LmFkZCgncmFuZG9tJyk7XG4gICAgcmFuZG9tLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIHNoaXBzSFRNTEVsZW1lbnRzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgIHNoaXBzSFRNTEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoc2hpcHNbaV0uc2hpcClcbiAgICAvLyB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllci5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gcGxheWVyQm9hcmRbaV0uY29scy5wdXNoKHsgcm93OiBpLCBjb2w6IGosIGNsaWNrZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgYm9hcmRIVE1MRWxlbWVudHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBib2FyZEhUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICBib2FyZEhUTUxFbGVtZW50cy5pbmRleE9mKGJvYXJkSFRNTEVsZW1lbnRzLmF0KC0xKSlcbiAgICAgICAgICAgIF0uc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIGkpO1xuICAgICAgICAgICAgYm9hcmRIVE1MRWxlbWVudHNbXG4gICAgICAgICAgICAgICAgYm9hcmRIVE1MRWxlbWVudHMuaW5kZXhPZihib2FyZEhUTUxFbGVtZW50cy5hdCgtMSkpXG4gICAgICAgICAgICBdLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBqKTtcbiAgICAgICAgICAgIGJvYXJkSFRNTEVsZW1lbnRzW1xuICAgICAgICAgICAgICAgIGJvYXJkSFRNTEVsZW1lbnRzLmluZGV4T2YoYm9hcmRIVE1MRWxlbWVudHMuYXQoLTEpKVxuICAgICAgICAgICAgXS5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG4gICAgICAgICAgICBib2FyZEhUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICBib2FyZEhUTUxFbGVtZW50cy5pbmRleE9mKGJvYXJkSFRNTEVsZW1lbnRzLmF0KC0xKSlcbiAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZCgncGxheWVyLWJvYXJkLWNlbGwnKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHBsYXllci5ib2FyZC5ib2FyZFtpXVtqICsgMV0gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5ib2FyZFtpXVtqICsgMV0uc2hpcCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbaV1baiArIDFdLnNoaXAgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0uc2hpcFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLnNoaXAgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0uc2hpcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5jaGVja2VkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uY29sQ29yZDEgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uY29sQ29yZDIgPSBqICsgc2hpcHNba10ubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10ucm93Q29yZDEgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10ucm93Q29yZDIgPSBpICsgMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc0hUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzSFRNTEVsZW1lbnRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdC5hZGQoc2hpcHNba10uc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXIuYm9hcmQuYm9hcmRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5ib2FyZFtpICsgMV1bal0uc2hpcCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0uc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5zaGlwID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5ib2FyZFtpXVtqXS5zaGlwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5jaGVja2VkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uY29sQ29yZDEgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLmNvbENvcmQyID0gaiArIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5yb3dDb3JkMSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10ucm93Q29yZDIgPSBpICsgc2hpcHNba10ubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzSFRNTEVsZW1lbnRzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZChzaGlwc1trXS5zaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5zaGlwID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5ib2FyZFtpXVtqXS5zaGlwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5jaGVja2VkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uY29sQ29yZDEgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLmNvbENvcmQyID0gaiArIHNoaXBzW2tdLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5yb3dDb3JkMSA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10ucm93Q29yZDIgPSBpICsgc2hpcHNba10ubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzSFRNTEVsZW1lbnRzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZChzaGlwc1trXS5zaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2tdLnNoaXAgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0uc2hpcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5jaGVja2VkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1trXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uY29sQ29yZDEgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10uY29sQ29yZDIgPSBqICsgc2hpcHNba10ubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10ucm93Q29yZDEgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNba10ucm93Q29yZDIgPSBpICsgc2hpcHNba10ubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwc0hUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzSFRNTEVsZW1lbnRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNsYXNzTGlzdC5hZGQoc2hpcHNba10uc2hpcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvYXJkSFRNTEVsZW1lbnRzW1xuICAgICAgICAgICAgICAgICAgICBib2FyZEhUTUxFbGVtZW50cy5pbmRleE9mKGJvYXJkSFRNTEVsZW1lbnRzLmF0KC0xKSlcbiAgICAgICAgICAgICAgICBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMjU1LDAsIDAuNSknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlclBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbXB1dGVyUGxheWVyLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmRIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0uc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIGkpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmRIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0uc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGopO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmRIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2VsbCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50c1tcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmRIVE1MRWxlbWVudHMuYXQoLTEpLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItYm9hcmQtY2VsbCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIHJvd0luZGV4Q2VsbHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGNvbEluZGV4Q2VsbHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHJvd0luZGV4Q2VsbHNbaV0uY2xhc3NMaXN0LmFkZCgncm93LWluZGV4LWNlbGwnKTtcbiAgICAgICAgY29sSW5kZXhDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdjb2wtaW5kZXgtY2VsbCcpO1xuICAgICAgICByb3dJbmRleENlbGxzW2ldLnRleHRDb250ZW50ID0gcm93QXJyYXlbaV07XG4gICAgICAgIGNvbEluZGV4Q2VsbHNbaV0udGV4dENvbnRlbnQgPSBjb2xBcnJheVtpXTtcbiAgICAgICAgcm93SW5kZXguYXBwZW5kQ2hpbGQocm93SW5kZXhDZWxsc1tpXSk7XG4gICAgICAgIGNvbEluZGV4LmFwcGVuZENoaWxkKGNvbEluZGV4Q2VsbHNbaV0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBjb21wdXRlclJvd0luZGV4Q2VsbHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGNvbXB1dGVyQ29sSW5kZXhDZWxscy5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgY29tcHV0ZXJSb3dJbmRleENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ3Jvdy1pbmRleC1jZWxsJyk7XG4gICAgICAgIGNvbXB1dGVyQ29sSW5kZXhDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCdjb2wtaW5kZXgtY2VsbCcpO1xuICAgICAgICBjb21wdXRlclJvd0luZGV4Q2VsbHNbaV0udGV4dENvbnRlbnQgPSByb3dBcnJheVtpXTtcbiAgICAgICAgY29tcHV0ZXJDb2xJbmRleENlbGxzW2ldLnRleHRDb250ZW50ID0gY29sQXJyYXlbaV07XG4gICAgICAgIGNvbXB1dGVyUm93SW5kZXguYXBwZW5kQ2hpbGQoY29tcHV0ZXJSb3dJbmRleENlbGxzW2ldKTtcbiAgICAgICAgY29tcHV0ZXJDb2xJbmRleC5hcHBlbmRDaGlsZChjb21wdXRlckNvbEluZGV4Q2VsbHNbaV0pO1xuICAgIH1cblxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uc0NvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwbGF5QnV0dG9uQ29udGFpbmVyKTtcbiAgICBwbGF5QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlCdXR0b25CYWNrZ3JvdW5kKTtcbiAgICBwbGF5QnV0dG9uQmFja2dyb3VuZC5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbiAgICBzZWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTZWN0aW9uKTtcbiAgICBzZWN0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlclNlY3Rpb24pO1xuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQoY29sSW5kZXgpO1xuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocm93SW5kZXgpO1xuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocmFuZG9tKTtcbiAgICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tcHV0ZXJDb2xJbmRleCk7XG4gICAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVyUm93SW5kZXgpO1xuICAgIGNvbXB1dGVyU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkQ29udGFpbmVyKTtcblxuICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gJ1BsYXknO1xuXG4gICAgcmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpbml0RGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZEhUTUxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcm93ID0gYm9hcmRIVE1MRWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpICogMTtcbiAgICAgICAgbGV0IGNvbCA9IGJvYXJkSFRNTEVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSAqIDE7XG4gICAgICAgIGJvYXJkSFRNTEVsZW1lbnRzW2ldLnN0eWxlLmdyaWRSb3cgPSBgJHtyb3cgKyAxfSAvICR7cm93ICsgMn1gO1xuICAgICAgICBib2FyZEhUTUxFbGVtZW50c1tpXS5zdHlsZS5ncmlkQ29sdW1uID0gYCR7Y29sICsgMX0gLyAke2NvbCArIDJ9YDtcbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRIVE1MRWxlbWVudHNbaV0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcm93ID0gY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykgKiAxO1xuICAgICAgICBsZXQgY29sID0gY29tcHV0ZXJCb2FyZEhUTUxFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykgKiAxO1xuICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzW2ldLnN0eWxlLmdyaWRSb3cgPSBgJHtyb3cgKyAxfSAvICR7cm93ICsgMn1gO1xuICAgICAgICBjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzW2ldLnN0eWxlLmdyaWRDb2x1bW4gPVxuICAgICAgICAgICAgYCR7Y29sICsgMX0gLyAke2NvbCArIDJ9YDtcbiAgICAgICAgY29tcHV0ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkSFRNTEVsZW1lbnRzW2ldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwc0hUTUxFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKCdzaGlwcy1lbGVtZW50Jyk7XG4gICAgICAgIHNoaXBzSFRNTEVsZW1lbnRzW2ldLnN0eWxlLmdyaWRSb3cgPVxuICAgICAgICAgICAgYCR7c2hpcHNbaV0ucm93Q29yZDF9IC8gJHtzaGlwc1tpXS5yb3dDb3JkMn1gO1xuXG4gICAgICAgIHNoaXBzSFRNTEVsZW1lbnRzW2ldLnN0eWxlLmdyaWRDb2x1bW4gPVxuICAgICAgICAgICAgYCR7c2hpcHNbaV0uY29sQ29yZDF9IC8gJHtzaGlwc1tpXS5jb2xDb3JkMn1gO1xuXG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBzSFRNTEVsZW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUocGxheWVyLCBjb21wdXRlclBsYXllcik7XG59XG5cbmV4cG9ydCB7IGluaXREaXNwbGF5IH07XG4iLCJpbXBvcnQgeyBnYW1lT3ZlciB9IGZyb20gJy4vY2hlY2stZW5kLWdhbWUnO1xuXG5mdW5jdGlvbiBwbGF5Um91bmQodHVybiwgcGxheWVyLCBjb21wdXRlcikge1xuICAgIGxldCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWJvYXJkLWNlbGwnKTtcbiAgICBsZXQgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJvYXJkLWNlbGwnKTtcbiAgICBsZXQgYXZhaWxhYmxlUGxheWVyQ2VsbHMgPSBbXTtcbiAgICBsZXQgYXZhaWxhYmxlQ29tcHV0ZXJDZWxscyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhdmFpbGFibGVDb21wdXRlckNlbGxzLnB1c2goW10pO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbXB1dGVyLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVDb21wdXRlckNlbGxzW2ldLnB1c2goYCR7aX0ke2p9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhdmFpbGFibGVQbGF5ZXJDZWxscy5wdXNoKFtdKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZVBsYXllckNlbGxzW2ldLnB1c2goYCR7aX0ke2p9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gJ2F1dG8nO1xuICAgIH0pO1xuXG4gICAgaWYgKHR1cm4gPT09ICdwbGF5ZXInKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29tcHV0ZXIuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhdmFpbGFibGVDb21wdXRlckNlbGxzW2ldW1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlQ29tcHV0ZXJDZWxsc1tpXS5pbmRleE9mKGAke2l9JHtqfWApXG4gICAgICAgICAgICAgICAgICAgIF0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgLmNvbXB1dGVyLWJvYXJkLWNlbGxbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtqfVwiXWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDb21wdXRlckNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ2VsbC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDb21wdXRlckNlbGwpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlUGxheWVyQ2VsbHMubGVuZ3RoKTtcbiAgICAgICAgbGV0IGNvcmRzID1cbiAgICAgICAgICAgIGF2YWlsYWJsZVBsYXllckNlbGxzW3Jvd11bXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlUGxheWVyQ2VsbHNbcm93XS5sZW5ndGgpXG4gICAgICAgICAgICBdO1xuICAgICAgICBsZXQgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5wbGF5ZXItYm9hcmQtY2VsbFtkYXRhLXJvdz1cIiR7Y29yZHNbMF0gKiAxfVwiXVtkYXRhLWNvbD1cIiR7Y29yZHNbMV0gKiAxfVwiXWAsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tQbGF5ZXJDZWxsKTtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGlja0NvbXB1dGVyQ2VsbCgpIHtcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpICogMTtcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpICogMTtcblxuICAgICAgICBpZiAoY29tcHV0ZXIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnYXV0byc7XG4gICAgICAgICAgICBjb21wdXRlci5ib2FyZC5ib2FyZFtyb3ddW2NvbF0uc2hpcCA9IDA7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDb21wdXRlckNlbGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLnNoaXAgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB1dGVyLmdvdEhpdChyb3csIGNvbCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LDAsMCknO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSAnYXV0byc7XG5cbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbXB1dGVyQ2VsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF2YWlsYWJsZUNvbXB1dGVyQ2VsbHNbcm93XS5zcGxpY2UoXG4gICAgICAgICAgICBhdmFpbGFibGVDb21wdXRlckNlbGxzW3Jvd10uaW5kZXhPZihgJHtyb3d9JHtjb2x9YCksXG4gICAgICAgICAgICAxLFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjaGVjayA9IGdhbWVPdmVyKGNvbXB1dGVyKTtcbiAgICAgICAgaWYgKCFjaGVjaykge1xuICAgICAgICAgICAgcGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGF2YWlsYWJsZVBsYXllckNlbGxzW1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykgKiAxXG4gICAgICAgICAgICAgICAgICAgIF1bXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVQbGF5ZXJDZWxsc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSAqIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSAqIDF9JHtjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSAqIDF9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUGxheWVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZVBsYXllckNlbGxzLmxlbmd0aCk7XG4gICAgICAgICAgICB3aGlsZSAoYXZhaWxhYmxlUGxheWVyQ2VsbHNbcm93XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZVBsYXllckNlbGxzW3Jvd10ubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBjb3JkcyA9IGF2YWlsYWJsZVBsYXllckNlbGxzW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGxldCBjZWxsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5wbGF5ZXItYm9hcmQtY2VsbFtkYXRhLXJvdz1cIiR7Y29yZHNbMF0gKiAxfVwiXVtkYXRhLWNvbD1cIiR7Y29yZHNbMV0gKiAxfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2VsbEVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsaWNrUGxheWVyQ2VsbCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykgKiAxO1xuICAgICAgICAgICAgbGV0IGNvbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpICogMTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5JztcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLnNoaXAgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUGxheWVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5ib2FyZFtyb3ddW2NvbF0uc2hpcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmdvdEhpdChyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsMCwyNTUpJztcbiAgICAgICAgICAgICAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1BsYXllckNlbGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlci5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXZhaWxhYmxlQ29tcHV0ZXJDZWxsc1tpXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVDb21wdXRlckNlbGxzW2ldLmluZGV4T2YoYCR7aX0ke2p9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLmNvbXB1dGVyLWJvYXJkLWNlbGxbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtqfVwiXWAsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcENlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQ29tcHV0ZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBDZWxsLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2YWlsYWJsZVBsYXllckNlbGxzW3Jvd10uc3BsaWNlKFxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZVBsYXllckNlbGxzW3Jvd10uaW5kZXhPZihgJHtyb3d9JHtjb2x9YCksXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBjaGVjayA9IGdhbWVPdmVyKHBsYXllcik7XG5cbiAgICAgICAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGF2YWlsYWJsZUNvbXB1dGVyQ2VsbHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykgKiAxXG4gICAgICAgICAgICAgICAgICAgICAgICBdW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNvbXB1dGVyQ2VsbHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpICogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykgKiAxfSR7Y2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJykgKiAxfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NvbXB1dGVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHBsYXlSb3VuZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG5mdW5jdGlvbiBwbGF5ZXJzKG5hbWUpIHtcbiAgICBsZXQgYm9hcmQgPSBnYW1lQm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIGdvdEhpdChjb3JkMSwgY29yZDIpIHtcbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb3JkMSwgY29yZDIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdEhpdCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlcigpIHtcbiAgICBsZXQgbmFtZSA9ICdDb21wdXRlcic7XG4gICAgbGV0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBnb3RIaXQoY29yZDEsIGNvcmQyKSB7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29yZDEsIGNvcmQyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdEhpdCxcbiAgICB9O1xufVxuXG5leHBvcnQgeyBwbGF5ZXJzLCBjb21wdXRlciB9O1xuIiwiZnVuY3Rpb24gc2hpcChsZW5ndGgsIG5hbWUsIGlkKSB7XG4gICAgbGV0IGdvdEhpdCA9IDA7XG4gICAgbGV0IGhhc0JlZW5TdW5rID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICBpZiAoIWhhc0JlZW5TdW5rKSB7XG4gICAgICAgICAgICBnb3RIaXQrKztcbiAgICAgICAgICAgIGxldCBtc2cgPSBpc1N1bmsoKTtcbiAgICAgICAgICAgIGlmIChoYXNCZWVuU3Vuaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX0gZ290IGhpdGA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAoZ290SGl0ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIGhhc0JlZW5TdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfSBpcyBzdW5rYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgZ2V0IGdvdEhpdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBnb3RIaXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoYXNCZWVuU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNCZWVuU3VuaztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0LFxuICAgICAgICBpZCxcbiAgICB9O1xufVxuXG5jb25zdCBjYXJyaWVyID0gc2hpcCg0LCAnQ2FycmllcicsICdjMScpO1xuY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoMywgJ0JhdHRsZXNoaXAnLCAnYjEnKTtcbmNvbnN0IGRlc3Ryb3llciA9IHNoaXAoMiwgJ0Rlc3Ryb3llcicsICdkMScpO1xuY29uc3QgcGF0cm9sQm9hdCA9IHNoaXAoMSwgJ1BhdHJvbCBCb2F0JywgJ3BiMScpO1xuXG5leHBvcnQgeyBjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHBhdHJvbEJvYXQsIHNoaXAgfTtcbiIsImltcG9ydCB7IHBsYXlSb3VuZCB9IGZyb20gJy4vcGxheS1yb3VuZCc7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTtcbiAgICBsZXQgdHVybiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgcGxheUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIGxldCByYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyk7XG4gICAgICAgIHJhbmRvbS5yZW1vdmUoKTtcbiAgICAgICAgcGxheUJ1dHRvbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKHR1cm4gPiA1KSB7XG4gICAgICAgICAgICB0dXJuID0gJ3BsYXllcic7XG4gICAgICAgICAgICBwbGF5Um91bmQodHVybiwgcGxheWVyLCBjb21wdXRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0dXJuID0gJ2NvbXB1dGVyJztcbiAgICAgICAgICAgIHBsYXlSb3VuZCh0dXJuLCBwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBzdGFydEdhbWUgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9vcHN6LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2ludGVyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tY2VsbC1zaXplOiAzMHB4O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6ICdpbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwOWJmNTtcbn1cblxuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDE1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtZ2FwOiA3NXB4OyAqL1xufVxuXG4uc2VjdGlvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLWdhcDogNzVweDtcbn1cblxuLmJvYXJkLWNlbGwsXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmJvYXJkLWNlbGwsXG4uc2hpcHMtZWxlbWVudCB7XG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xufVxuXG4uYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tY2VsbC1zaXplKSBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIHZhcigtLWNlbGwtc2l6ZSkpO1xufVxuXG4ucm93LWluZGV4IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcbiAgICBncmlkLXJvdzogMiAvIDEyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jb2wtaW5kZXgge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIHZhcigtLWNlbGwtc2l6ZSkpO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgdmFyKC0tY2VsbC1zaXplKSk7XG4gICAgZ3JpZC1yb3c6IDIgLyAxMjtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbi5zaGlwcy1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIzMCwgMCwgMC41KTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweCAwO1xufVxuXG4ucGxheS1idXR0b24tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNGU0ZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheS1idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnBsYXktYnV0dG9uOmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBsYXktYnV0dG9uLFxuLnBsYXktYnV0dG9uLWJhY2tncm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5ldy1nYW1lLWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5yYW5kb20ge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7OztxQkFHaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUVBQW1FO0lBQ25FLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1EQUFtRDtJQUNuRCxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaW50ZXInO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9vcHN6XFxcXCx3Z2h0LnR0Zik7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY2VsbC1zaXplOiAzMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdpbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5YmY1O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDE1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDc1cHg7ICovXFxufVxcblxcbi5zZWN0aW9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWdhcDogNzVweDtcXG59XFxuXFxuLmJvYXJkLWNlbGwsXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCxcXG4uc2hpcHMtZWxlbWVudCB7XFxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tY2VsbC1zaXplKSBjYWxjKHZhcigtLWNlbGwtc2l6ZSkgKiAxMCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCB2YXIoLS1jZWxsLXNpemUpKTtcXG59XFxuXFxuLnJvdy1pbmRleCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAxMjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNvbC1pbmRleCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgdmFyKC0tY2VsbC1zaXplKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCB2YXIoLS1jZWxsLXNpemUpKTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAxMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uc2hpcHMtZWxlbWVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjMwLCAwLCAwLjUpO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4IDA7XFxufVxcblxcbi5wbGF5LWJ1dHRvbi1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNGU0ZTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wbGF5LWJ1dHRvbjphY3RpdmUge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5wbGF5LWJ1dHRvbixcXG4ucGxheS1idXR0b24tYmFja2dyb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm5ldy1nYW1lLWJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJhbmRvbSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImluaXREaXNwbGF5IiwiZ2FtZU92ZXIiLCJwbGF5ZXIiLCJib2FyZCIsInBsYXlCdXR0b25Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5QnV0dG9uQmFja2dyb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJuZXdHYW1lQnV0dG9uIiwibWFpbiIsInAiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiYWxpZ25TZWxmIiwiZm9udFdlaWdodCIsIm5hbWUiLCJpbm5lckhUTUwiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNoaXAiLCJnYW1lQm9hcmQiLCJyZWZCb2FyZCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwMSIsImJhdHRsZXNoaXAyIiwiZGVzdHJveWVyMSIsImRlc3Ryb3llcjIiLCJkZXN0cm95ZXIzIiwicGF0cm9sQm9hdDEiLCJwYXRyb2xCb2F0MiIsInBhdHJvbEJvYXQzIiwicGF0cm9sQm9hdDQiLCJzaGlwcyIsImkiLCJkaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wUm93IiwidGVtcENvbCIsImNvcmRzIiwibGVuZ3RoIiwicGxhY2VTaGlwcyIsInJlY2VpdmVBdHRhY2siLCJjb3JkMSIsImNvcmQyIiwiaWQiLCJ0ZW1wIiwiaGl0IiwiY2hlY2siLCJoYXNCZWVuU3VuayIsInRvVGVzdCIsIm5ld0JvYXJkIiwic2hvdyIsImluZGV4Iiwicm93IiwiY29sIiwiZmxhZyIsInNwbGljZSIsImluZGV4T2YiLCJjb3JkIiwiaiIsInB1c2giLCJwbGF5ZXJzIiwiY29tcHV0ZXIiLCJzdGFydEdhbWUiLCJjb21wdXRlclBsYXllciIsInBsYXllclNlY3Rpb24iLCJjb21wdXRlclNlY3Rpb24iLCJyb3dJbmRleCIsImNvbEluZGV4IiwiY29tcHV0ZXJSb3dJbmRleCIsImNvbXB1dGVyQ29sSW5kZXgiLCJib2FyZENvbnRhaW5lciIsImNvbXB1dGVyQm9hcmRDb250YWluZXIiLCJib2FyZEhUTUxFbGVtZW50cyIsImNvbXB1dGVyQm9hcmRIVE1MRWxlbWVudHMiLCJyb3dBcnJheSIsImNvbEFycmF5Iiwicm93SW5kZXhDZWxscyIsImNvbEluZGV4Q2VsbHMiLCJjb21wdXRlclJvd0luZGV4Q2VsbHMiLCJjb21wdXRlckNvbEluZGV4Q2VsbHMiLCJjaGVja2VkIiwiY29sQ29yZDEiLCJjb2xDb3JkMiIsInJvd0NvcmQxIiwicm93Q29yZDIiLCJzaGlwc0hUTUxFbGVtZW50cyIsInNlY3Rpb25zQ29udGFpbmVyIiwicGxheUJ1dHRvbiIsInRleHRDb250ZW50IiwiYXQiLCJzZXRBdHRyaWJ1dGUiLCJrIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QXR0cmlidXRlIiwiZ3JpZFJvdyIsImdyaWRDb2x1bW4iLCJwbGF5Um91bmQiLCJ0dXJuIiwiY29tcHV0ZXJDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJDZWxscyIsImF2YWlsYWJsZVBsYXllckNlbGxzIiwiYXZhaWxhYmxlQ29tcHV0ZXJDZWxscyIsImZvckVhY2giLCJjZWxsIiwiY3Vyc29yIiwidGVtcENlbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xpY2tDb21wdXRlckNlbGwiLCJjZWxsRWxlbWVudCIsImNsaWNrUGxheWVyQ2VsbCIsImNsaWNrIiwiZ290SGl0Iiwic2V0VGltZW91dCIsIm1zZyIsImlzU3VuayIsImJhdHRsZXNoaXAiLCJkZXN0cm95ZXIiLCJwYXRyb2xCb2F0IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==