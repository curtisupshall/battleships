import React from 'react'

import { IGameState } from '../../../api/src/types'

import Flexbox from '../components/Flexbox'
import GameBoard from '../components/GameBoard'

const PlayPage = () => {
    // const game: IGame = {}

    return (
        <div id='play'>
            <Flexbox flexDirection='column' alignItems='center'>
                <GameBoard />
                <GameBoard />
            </Flexbox>
        </div>
    )
}

export default PlayPage
