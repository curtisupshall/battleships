import Coord from './Coord'
import Ship from './Ship'
import { IGameBoard, IShipPlacement } from './types'

class GameBoard implements IGameBoard {
    readonly id: number
    readonly width: number
    readonly height: number
    shotsFired: Coord[]
    readonly ships: Ship[]

    constructor(id: number, width: number, height: number, ships: Ship[]) {
        this.id = id
        this.width = width
        this.height = height
        this.ships = ships
        this.shotsFired = []
    }

    /**
     * Determines whether or not the placement of the Player's ships is allowed.
     * @param ships The placement of the Ships that the Player is requesting
     */
    validateShipPlacement = (ships: IShipPlacement[]): boolean => {
        // 1. Check that all ship segements are in bounds
        // 2. Check that no two ships are overlapping
        // 3. Check that one of each type of ship is present; no more, no less
        return false
    }
}

export default GameBoard
