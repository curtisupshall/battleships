import classNames from 'classnames'
import React from 'react'

import { Typography, Paper } from '@material-ui/core'

import Flexbox from '../../components/Flexbox'
import GameBoard from '../../components/GameBoard'

import withAuth from '../../hocs/withAuth'

const PlayPage = () => {
    // const game: IGame = {}
    const playStatus: string = ''

    return (
        <div id='play'>
            <Flexbox flexDirection='row' justifyContent='center'>
                <Flexbox flexDirection='column' alignItems='center'>
                    <GameBoard />
                    <GameBoard />
                </Flexbox>
                <Paper className='play__stats'>
                    <Typography variant='h5'>You</Typography>
                    <Typography variant='subtitle1'>v.s.</Typography>
                    <Typography variant='h5'>WholesomePoggers100</Typography>
                    <Typography variant='h6' className={classNames('play__status', `--${playStatus}`)}>
                        It's your turn.
                    </Typography>
                </Paper>
            </Flexbox>
            
        </div>
    )
}

export default withAuth(PlayPage)
