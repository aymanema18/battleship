import { carrier, battleship, destroyer, patrolBoat, ship } from './ship.js';
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
        let board = [
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

        attack.toTest(board);
        console.log(attack.board[0]);
        expect(attack.receiveAttack(0, 3)).toMatch(/Battleship1 got hit/);
    });

    test('check if the ship can git hit', () => {
        let attack = gameBoard();
        let board = [
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
                { ship: 'b2' },
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

        attack.toTest(board);
        console.log(attack.board[0]);
        expect(attack.receiveAttack(9, 0)).toMatch(/Battleship2 got hit/);
    });

    test('check if the ship can git hit', () => {
        let attack = gameBoard();
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
                { ship: 'b2' },
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
        placeShips(3, '39', board, refBoard, ships, 0);
        // c1
        placeShips(3, '00', board, refBoard, ships, 1);
        // b1
        placeShips(3, '45', board, refBoard, ships, 2);
        // b2
        placeShips(3, '80', board, refBoard, ships, 3);
        // d1
        placeShips(3, '43', board, refBoard, ships, 4);
        // d2
        placeShips(3, '57', board, refBoard, ships, 5);
        // d3
        placeShips(3, '18', board, refBoard, ships, 6);
        // pb1
        placeShips(3, '25', board, refBoard, ships, 7);
        // pb2
        placeShips(6, '92', board, refBoard, ships, 8);
        // pb3
        placeShips(6, '94', board, refBoard, ships, 9);
        // pb4
        attack.toTest(board);

        expect(attack.receiveAttack(9, 0)).toMatch(/Destroyer1 got hit/);
    });

    test('check if the ship can git hit', () => {
        let attack = gameBoard();
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
                { ship: 'b2' },
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
        placeShips(6, '76', board, refBoard, ships, 0);
        // c1
        placeShips(3, '08', board, refBoard, ships, 1);
        // b1
        placeShips(3, '20', board, refBoard, ships, 2);
        // b2
        placeShips(6, '15', board, refBoard, ships, 3);
        // d1
        placeShips(3, '12', board, refBoard, ships, 4);
        // d2
        placeShips(6, '63', board, refBoard, ships, 5);
        // d3
        placeShips(3, '81', board, refBoard, ships, 6);
        // pb1
        placeShips(3, '93', board, refBoard, ships, 7);
        // pb2
        placeShips(6, '44', board, refBoard, ships, 8);
        // pb3
        placeShips(6, '99', board, refBoard, ships, 9);
        // pb4
        attack.toTest(board);

        expect(attack.receiveAttack(4, 4)).toMatch(/Patrol Boat3 is sunk/);
    });

    test('check missing a hit', () => {
        let attack = gameBoard();
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
                { ship: 'b2' },
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
        placeShips(3, '39', board, refBoard, ships, 0);
        // c1
        placeShips(3, '00', board, refBoard, ships, 1);
        // b1
        placeShips(3, '45', board, refBoard, ships, 2);
        // b2
        placeShips(3, '80', board, refBoard, ships, 3);
        // d1
        placeShips(3, '43', board, refBoard, ships, 4);
        // d2
        placeShips(3, '57', board, refBoard, ships, 5);
        // d3
        placeShips(3, '18', board, refBoard, ships, 6);
        // pb1
        placeShips(3, '25', board, refBoard, ships, 7);
        // pb2
        placeShips(6, '92', board, refBoard, ships, 8);
        // pb3
        placeShips(6, '94', board, refBoard, ships, 9);
        // pb4
        attack.toTest(board);

        expect(attack.receiveAttack(9, 1)).toMatch(/Attack missed/);
    });

    // test('check missed hit', () => {
    //     expect(attackTest.receiveAttack(1, 3)).toMatch(/Attack missed/);
    // });

    // test('check hitting the same place', () => {
    //     expect(attackTest.receiveAttack(0, 0)).toMatch(/no no/);
    // });
});
