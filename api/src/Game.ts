import Coord from './Coord'
import { IGame } from './types'

class Game {
    gameId: number
    playerId: number
    opponentId: number
    gameCode: string
    active: boolean
    width: number
    height: number
    playerShips: Coord[]
    playerShots: Coord[]
    opponentShips: Coord[]
    opponentShots: Coord[]

    constructor(row: any) {
        this.gameId = row.gameId
        this.playerId = row.playerId,
        this.opponentId = row.opponentId,
        this.gameCode = row.gameCode,
        this.active = Boolean(row.active),
        this.width = row.width,
        this.height = row.height,
        this.playerShips = JSON.parse(row.playerShips),
        this.opponentShips = JSON.parse(row.opponentShips),
        this.opponentShots = [],
        this.playerShots = []
    }

    /**
     * Determines if the game currently has an opponent joined or not.
     * @return True if the Game has an opponent, false otherwise.
     */
    hasOpponent = (): boolean => {
        return Boolean(this.opponentId)
    }

    setPlayerShots = (playerShots: Coord[]) => {
        this.playerShots = playerShots
    }

    setOpponentShots = (opponentShots: Coord[]) => {
        this.opponentShots = opponentShots
    }

    toJSON = (): IGame => {
        let { gameId, playerId, opponentId, gameCode, active, width, height } = this
        const toArray = (ship: Coord) => ship.toArray()

        return {
            gameId,
            playerId,
            opponentId,
            gameCode,
            active,
            width,
            height,
            playerShips: this.playerShips.map(toArray),
            opponentShips: this.opponentShips.map(toArray),
            opponentShots: this.opponentShots.map(toArray),
            playerShots: this.playerShots.map(toArray)
        }
    }
}

export default Game
