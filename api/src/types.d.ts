import Coord from './Coord'
import Game from './Game'

export interface IGame extends IGameShots {
    gameId: number
    playerId: number
    opponentId: number
    gameCode: string
    active: boolean
    width: number
    height: number
    playerShips: [number, number][]
    opponentShips: [number, number][]
}

export interface IGameShots {
    playerShots: [number, number][]
    opponentShots: [number, number][]
}

export type ShipType = 
    | 'carrier'
    | 'battleship'
    | 'cruiser'
    | 'submarine'
    | 'destroyer'

export type ShipOrientation = 'vertical' | 'horizontal'

