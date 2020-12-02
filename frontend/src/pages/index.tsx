import Link from 'next/link'
import React from 'react'

import {
    Button
} from '@material-ui/core'


const HomePage = () => (
    <div id='homepage'>
        <div className='background-image' />
        <div className='homepage__content'>
            <h1>Play Battleships Online!</h1>
            <Link href='games'>
                <a>
                    <Button variant='contained' color='primary'>Play Now</Button>
                </a>
            </Link>
        </div>
    </div>
)


export default HomePage
