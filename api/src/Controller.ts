import Coord from './Coord'
import Database from './Database'
import Game from './Game'
import GameBoard from './GameBoard'



/**
 * Creates a new Game.
 * @param playerId The ID of the player creating the Game
 * @param shipPlacement The placement of the ships the player has chosen
 * @return The new Game that has been created
 */
export const createGame = (playerId: number, ships: Coord[], width: number, height: number): Game => {
    const database = new Database()

    // Convert ships into JSON
    const shipJson: string = ships.map((ship: Coord) => ship.toString()).join(',')

    // Generate a *unique* game code.
    // NOTE: This code is NOT unique and is only PSEUDO RANDOM.
    const gameCode: string = Math.random().toString(36).substring(2, 8).toUpperCase()

    // Create the game record
    const game: Game = database.createGame(playerId, shipJson, width, height, gameCode)

    console.log('Created game:', game)
    return game
}

export const getGames = (playerId: number): Game[] => {
    const database = new Database()
    const games: Game[] = database.getGames(playerId)
    return games
}

/**
 * 
 * @param playerId The ID of the player wanting to resign
 * @param gameId The ID of the game in question
 * @return True if the player has successfully resigned, false otherwise
 */
export const resign = (playerId: number, gameId: number): boolean => {
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
export const checkGameCode = (gameCode: string): boolean => {
    const database = new Database()
    // Find a game in the database using the code
    // If the game exists and it does not have an opponent, return true
    // Otherwise return false
    return false
}

export const joinGame = (opponentId: number, ships: Coord[], gameCode: string): Game => {
    //
    return null
}
