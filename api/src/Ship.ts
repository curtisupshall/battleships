import Coord from './Coord'
import { ShipOrientation, ShipType } from './types'

class Ship {
    readonly type: ShipType
    readonly orientation: ShipOrientation
    readonly coords: Coord[]

    constructor(type: ShipType, origin: Coord, orientation: ShipOrientation) {
        this.type = type
        this.orientation = orientation
        // this.coords = createShipCoords(type, origin, orientation)
    }

    isSunk = (shotsFired: Coord[]): boolean => {
        return this.coords.every((coord: Coord) => shotsFired.some((shot: Coord) => shot.equals(coord)))
    }
}

export default Ship