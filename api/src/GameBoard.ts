import Coord from './Coord'
import Ship from './Ship'
import { IGameBoard } from './types'

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
}

export default GameBoard
