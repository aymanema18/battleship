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
        id,
    };
}

const carrier = ship(4, 'Carrier', 'c1');
const battleship = ship(3, 'Battleship', 'b1');
const destroyer = ship(2, 'Destroyer', 'd1');
const patrolBoat = ship(1, 'Patrol Boat', 'pb1');

export { carrier, battleship, destroyer, patrolBoat, ship };
