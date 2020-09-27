import { Request } from 'express'

import { IShipPlacement } from '../types'

export interface ICreateGameRequest extends Request {
    playerId: number
    shipPlacement: IShipPlacement[]
}

export interface IResignRequest extends Request  {
    playerId: number
    gameId: number
}


export interface IMoveRequest extends Request {
    playerId: number
    gameId: number
    coord: [number, number]
}


export interface IJoinGameRequest extends Request {
    playerId: number
    gameCode: string
    shipPlacement: IShipPlacement[]
}

export interface ICheckCodeRequest extends Request {
    gameCode: number
}


export interface IListGamesRequest extends Request {
    playerId: number
}
