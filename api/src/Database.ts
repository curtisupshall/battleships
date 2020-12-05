import sqlite3, { Database as SQLDatabase, Statement } from 'sqlite3'

import Game from './Game'
import Player from './Player'
import { IGame, IGameShots } from './types'

sqlite3.verbose()
const { DB_PATH } = process.env

class Database {
    private database: SQLDatabase = new sqlite3.Database(DB_PATH)

    /**
     * Inserts a player into the database.
     * @param name The Player's name
     */
    createPlayer = (name: string): Player => {
        this.database.serialize(() => {
            const stmt: Statement = this.database.prepare('INSERT INTO players (name) VALUES (?)')
            stmt.run(name)
            stmt.finalize()
        })

        this.database.close()
        return null
    }
    
    getGames = (playerId: number): IGame[] => {
        let games: IGame[] = []
        this.database.serialize(() => {
            this.database.each(
                'SELECT * FROM games WHERE playerId = ? OR opponentId = ?',
                [playerId, playerId],
                (err: any, row: any) => {

                }
            )
        })

        this.database.close()
        return games
    }

    /**
     * Find a Player by the given ID.
     * @param playerId The Player's ID
     */
    findPlayer = (playerId: number): Player => {
        return null
    }

    /**
     * Create a new Game.
     */
    createGame = (playerId: number, shipJson: string, width: number, height: number, gameCode: string): Game => {        
        // Create the new Game.
        this.database.serialize(() => {
            this.database.run(
                'INSERT INTO games (playerId, gameCode, width, height, playerShips) VALUES (?,?,?,?,?)',
                [playerId, gameCode, width, height, shipJson]
            )
        })

        return this.findGameByCode(gameCode)
    }

    /**
     * Finds a game by using its corresponding game code.
     * @param gameCode The game code of the game we want to find.
     */
    findGameByCode = (gameCode: string): Game => {
        let game: Game
        this.database.get(
            'SELECT * FROM games WHERE gameCode = ? LIMIT 1',
            [gameCode],
            (err: any, row: any) => {
                game = new Game(row)
            }
        )

        return game
    }

    /**
     * 
     * @param gameId The ID of the game we want to join
     * @param opponentId 
     */
    joinGame = (gameId: number, opponentId: number): void => {

    }

    private getGameShots = (gameId: number): IGameShots => {
        return {
            playerShots: [],
            opponentShots: []
        }
    }
}

export default Database
