import Coord from './Coord'
import Ship from './Ship'

export interface IGameBoard {
    readonly id: number
    readonly width: number
    readonly height: number
    shotsFired: Coord[]
    readonly ships: Ship[]
}

export type ShipType = 
    | 'carrier'
    | 'battleship'
    | 'cruiser'
    | 'submarine'
    | 'destroyer'

export type ShipOrientation = 'vertical' | 'horizontal'

// JSON interfaces

export interface IShip extends Omit<Ship, 'coords'> {
    coords: [number, number]
}


