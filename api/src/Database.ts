import sqlite3, { Database as SQLDatabase, Statement } from 'sqlite3'

import Game from './Game'
import Player from './Player'

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
    
    getGames = (playerId: number): Game[] => {
        let games: Game[] = []
        this.database.serialize(() => {
            const stmt: Statement = this.database.prepare('SELECT * FROM games WHERE playerId = ? OR opponentId = ?')
            stmt.run(name)
            stmt.finalize()
            stmt.all((err, rows) => {
                games = rows
            })
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
        var game: Game
        var gameId: number
        
        // Create the new Game.
        this.database.serialize(() => {
            this.database.run(
                'INSERT INTO games (playerId, gameCode, width, height, playerShips) VALUES (?,?,?,?,?)',
                [playerId, gameCode, width, height, shipJson],
                function (err: any) {
                    gameId = this.lastID
                }
            )

            console.log("GAME_ID", gameId)

            if (gameId) {
                this.database.get(
                    'SELECT * FROM games WHERE gameId = ?',
                    [gameId],
                    (err: any, row) => {
                        console.log('raw game =', game)
                        game = row
                    }
                )
            }
    
            // stmt.finalize()
        })
        return game
    }

    /**
     * Finds a game by using its corresponding game code.
     * @param gameCode The game code of the game we want to find.
     */
    findGameByCode = (gameCode: string): Game => {
        //
        return null
    }

    /**
     * 
     * @param gameId The ID of the game we want to join
     * @param opponentId 
     */
    joinGame = (gameId: number, opponentId: number): void => {

    }
}

export default Database
