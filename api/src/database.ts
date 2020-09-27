import sqlite3, { Database as SQLDatabase, Statement } from 'sqlite3'

import Game from './Game'
import Player from './Player'

sqlite3.verbose()

class Database {
    private database: SQLDatabase = new sqlite3.Database('battleships')

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
    createGame = (playerId: number, width: number, height: number): Game => {
        // Generate a *unique* game code.
        // Create the new Game.
        return null
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
