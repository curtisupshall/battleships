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
	test
} from '../Controller'

const router: Router = express.Router()

router.post('/login', (request: ILoginRequest, response: Response): Response => {
	const header: string = request.headers['Authentication'] as string
	const token: string = header.split(' ')[1]
	const { SECRET_TOKEN } = process.env
	// const decodedToken: string = jwt.verify(token, SECRET_TOKEN) as string
	return
})

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

router.post('/test', (request: IListGamesRequest, response: Response): Response => {
	test()
	response.status(200)
	response.json()

	return response
})

export { router }
