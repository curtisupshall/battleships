import Coord from './Coord'
import { ShipOrientation, ShipType } from './types'

/**
 * Creates the coordinates that the ship takes up.
 * @param type The variant of the ship, e.g. 'destroyer'
 * @param origin The origin coordinate of the ship
 * @param orientation The orientation of the ship, 'horizontal' or 'vertical'
 */
/**
 * DEPRICATED
 */
/*
export const createShipCoords = (type: ShipType, origin: Coord, orientation: ShipOrientation): Coord[] => {
    let shipLength: number = 1
    let shipCoordinates: Coord[] = [origin]
    switch (type) {
        case 'battleship':
            shipLength = 4
            break
        case 'carrier':
            shipLength = 5
            break
        case 'cruiser':
            shipLength = 3
            break
        case 'destroyer':
            shipLength = 2
            break
        case 'submarine':
            shipLength = 3
            break
    }
    let x: number = origin.x
    let y: number = origin.y
    for (let i = 0; i < shipLength; i ++) {
        if (orientation === 'horizontal') {
            shipCoordinates.push(new Coord(++ x, y))
        } else {
            shipCoordinates.push(new Coord(x, ++ y))
        }
    }

    return shipCoordinates
}
*/

/**
 * Determines whether or not the placement of the Player's ships is allowed.
 * @param ships The placement of the Ships that the Player is requesting
 */
export const validateShips = (ships: Coord[], width: number, height: number): boolean => {
    // 1. Check that all ship segements are in bounds
    // 2. Check that no two ships are overlapping
    return true
}
