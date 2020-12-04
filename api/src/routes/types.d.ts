import { Request } from 'express'

export interface ICreateGameRequest {
    playerId: number
    ships: [number, number][]
    width: number
    height: number
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
}

export interface ICheckCodeRequest extends Request {
    gameCode: number
}


export interface IListGamesRequest extends Request {
    playerId: number
}

export type ILoginRequest = Request
