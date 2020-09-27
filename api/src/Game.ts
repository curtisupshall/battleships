import GameBoard from './GameBoard'

class Game {
    id: number
    playerGameboard: GameBoard
    playerId: number
    opponentGameboard: GameBoard
    opponentId: number
    gameCode: string

    constructor(id: number, playerId: number, playerGameBoard: GameBoard, width: number, height: number, gameCode: string) {
        this.id = id
        this.playerId = playerId
        this.opponentId = -1
        this.opponentGameboard = null
        this.gameCode = gameCode
        this.playerGameboard = playerGameBoard
    }

    /**
     * Determines if the game currently has an opponent joined or not.
     * @return True if the Game has an opponent, false otherwise.
     */
    hasOpponent = (): boolean => {
        //
        return false
    }
}

export default Game
