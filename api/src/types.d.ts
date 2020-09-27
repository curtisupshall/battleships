import Coord from './Coord'
import Ship from './Ship'

export interface IShipPlacement {
    type: ShipType
    orientation: ShipOrientation
    origin: [number, number]
}

export interface IGameBoard {
    readonly id: number
    readonly width: number
    readonly height: number
    shotsFired: Coord[]
    readonly ships: Ship[]
}

export interface IGameState extends IGameBoard {
    oponentShots: Coord[]
}

export type ShipType = 
    | 'carrier'
    | 'battleship'
    | 'cruiser'
    | 'submarine'
    | 'destroyer'

export type ShipOrientation = 'vertical' | 'horizontal'
