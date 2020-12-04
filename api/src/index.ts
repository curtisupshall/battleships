import bodyParser from 'body-parser'
import env from 'dotenv'
import express, {
	Errback,
	Express,
	NextFunction,
	Request,
	Response,
} from 'express'
import logger from 'morgan'

import { router } from './routes/index'

// Configure .env file
env.config()

const app: Express = express()

interface IHTTPStatusError extends Errback {
	status: number
	message: string
}

app.set('port', 5000)
app.enable('verbose errors')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(router)

// 404 handler middleware, respond with JSON only
app.use((error: IHTTPStatusError, request: Request, response: Response, next: NextFunction) => {
	if (error.status !== 404) {
		return next(error)
	}

	response.status(404)
	response.send({
		status: 404,
		error: error.message || "Snake couldn't be found.",
	})

	return
})

// 500 handler middleware, respond with JSON only
app.use((error: IHTTPStatusError, request: Request, response: Response, next: NextFunction) => {
	console.error(error)
	const statusCode: number = error.status || 500
	response.status(statusCode)
	response.send({
		status: statusCode,
		error: error.message,
	})

	return
})

// Start our app
app.listen(app.get('port'), () => {
	console.log('Server listening on port %s', app.get('port'))
})
