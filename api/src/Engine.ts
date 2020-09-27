import Database from './Database'
import Game from './Game'
import GameBoard from './GameBoard'
import { IShipPlacement } from './types'

class Engine {
    /**
     * Creates a new Game.
     * @param playerId The ID of the player creating the Game
     * @param shipPlacement The placement of the ships the player has chosen
     * @return The new Game that has been created
     */
    static createGame = (playerId: number, shipPlacement: IShipPlacement[]): Game => {
        const database = new Database()
        // Check if the Player exists in the database
        // Check if the Player's ship placement is valid (use GameBoard.validateShipPlacement)
        // Create the Game and return it
        return null
    }

    /**
     * 
     * @param playerId The ID of the player wanting to resign
     * @param gameId The ID of the game in question
     * @return True if the player has successfully resigned, false otherwise
     */
    static resign = (playerId: number, gameId: number): boolean => {
        const database = new Database()
        // Check if the player exists in the database
        // Check if the game exists in the database and the player is part of that game
        // Check if the game is already won or if another player has resigned
        // Update the database to relect that the user has resigned
        return false
    }

    /**
     * Determines if a game code corresponds to a game that is joinable or not.
     * @param gameCode The game code that the opponent is checking
     */
    static checkGameCode = (gameCode: string): boolean => {
        const database = new Database()
        // Find a game in the database using the code
        // If the game exists and it does not have an opponent, return true
        // Otherwise return false
        return false
    }

    static joinGame = (opponentId: number, shipPlacement: IShipPlacement[], gameCode: string): Game => {
        //
        return null
    }
}

export default Engine
