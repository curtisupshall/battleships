import express, { Request, Response, Router } from 'express'
import jwt from 'jsonwebtoken'

import {
    ICreateGameRequest,
    ICheckCodeRequest,
    IJoinGameRequest,
    IListGamesRequest,
	IMoveRequest,
	ILoginRequest,
    IResignRequest
} from './types'

import {
	createGame,
	getGames
} from '../Controller'

import Coord from '../Coord'
import Game from '../Game'

import { validateShips } from '../utils'

const router: Router = express.Router()

router.post('/login', (request: ILoginRequest, response: Response): Response => {
	const header: string = request.headers['Authentication'] as string
	const token: string = header.split(' ')[1]
	const { SECRET_TOKEN } = process.env
	// const decodedToken: string = jwt.verify(token, SECRET_TOKEN) as string
	return
})

router.post('/games', (request: Request<any, any, ICreateGameRequest>, response: Response): Response => {
	const { playerId, width, height } = request.body
	const ships: Coord[] = request.body.ships.map((coord: [number, number]) => new Coord(coord[0], coord[1]))
	if (!validateShips(ships, width, height)) {
		response.status(400)
		response.json('Invalid ship placement.')
		return response
	}

	console.log('Request.body:', request.body)

	//try {
		const game: Game = createGame(playerId, ships, width, height)
		response.status(200)
		response.json(game)
	//} catch (err: any) {
	//	response.status(400)
//		response.json('Could not create game. ' + err)
//	}
	return response
})

router.get('/games', (request: IListGamesRequest, response: Response): Response => {
	response.status(200)
	response.json()

	return response
})

router.post('/resign', (request: IResignRequest, response: Response): Response => {
	response.status(200)
	response.json()

	return response
})

router.post('/move', (request: IMoveRequest, response: Response): Response => {
	response.status(200)
	response.json()

	return response
})

router.post('/join', (request: IJoinGameRequest, response: Response): Response => {
	response.status(200)
	response.json()

	return response
})

router.get('/validate', (request: ICheckCodeRequest, response: Response): Response => {
	response.status(200)
	response.json()

	return response
})

export { router }
