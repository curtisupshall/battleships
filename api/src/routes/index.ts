import express, { Request, Response, Router } from 'express'

import {
    ICreateGameRequest,
    ICheckCodeRequest,
    IJoinGameRequest,
    IListGamesRequest,
    IMoveRequest,
    IResignRequest
} from './types'
import Engine from '../Engine'

const router: Router = express.Router()
const engine: Engine = new Engine()

router.post('/create', (request: ICreateGameRequest, response: Response): Response => {
    response.status(200)
    // const data = engine.createGame()
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

router.post('/games', (request: IListGamesRequest, response: Response): Response => {
	response.status(200)
	response.json()

	return response
})

export { router }
