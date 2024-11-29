import { carrier, battleship, destroyer, patrolBoat } from './ship.js';
import { gameBoard, placeShips } from './gameboard.js';

describe('test ships', () => {
    test('test if carrier can sink', () => {
        for (let i = 0; i < 3; i++) {
            carrier.hit();
        }
        expect(carrier.hit()).toMatch(/Carrier is sunk/);
    });

    test('test if battleship can sink', () => {
        for (let i = 0; i < 2; i++) {
            battleship.hit();
        }
        expect(battleship.hit()).toMatch(/Battleship is sunk/);
    });

    test('test if destroyer can sink', () => {
        destroyer.hit();
        expect(destroyer.hit()).toMatch(/Destroyer is sunk/);
    });

    test('test if destroyer can sink', () => {
        expect(patrolBoat.hit()).toMatch(/Patrol Boat is sunk/);
    });
});

describe('test gameBoard', () => {
    test('check if the ship get placed', () => {
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
        let ships = [carrier, battleship, destroyer, patrolBoat];
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
        expect(placeShips(6, '25', board, refBoard, ships, 1)).toMatch(
            /[{ship: null}, {ship: null}, {ship: null}, {ship: null}, {ship: null}, {ship: 'b1}, {ship: 'b1}, {ship: 'b1}, {ship: null}]/,
        );
    });
});

describe('test receiveAttack', () => {
    test('check if the ship can git hit', () => {
        let attack = gameBoard();
        attack.board = [
            [
                { ship: null },
                { ship: null },
                { ship: null },
                { ship: 'b1' },
                { ship: 'b1' },
                { ship: 'b1' },
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
        expect(attack.receiveAttack(0, 3)).toMatch(/Battleship1 got hit/);
    });

    // test('check missed hit', () => {
    //     expect(attackTest.receiveAttack(1, 3)).toMatch(/Attack missed/);
    // });

    // test('check hitting the same place', () => {
    //     expect(attackTest.receiveAttack(0, 0)).toMatch(/no no/);
    // });
});
