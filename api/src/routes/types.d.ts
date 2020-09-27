import { IShipPlacement } from '../types'

export interface ICreateGameRequest {
    playerId: number
    shipPlacement: IShipPlacement[]
}

export interface IResignRequest {
    playerId: number
    gameId: number
}


export interface IMoveRequest {
    playerId: number
    gameId: number
    coord: [number, number]
}


export interface IJoinGameRequest {
    playerId: number
    gameCode: string
    shipPlacement: IShipPlacement[]
}

export interface ICheckCodeRequest {
    gameCode: number
}


export interface IListGamesRequest {
    playerId: number
}
