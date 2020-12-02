import React from 'react'
import Link from 'next/link'
import Flexbox from './Flexbox'

interface ITopBarProps {

}

const TopBar = (props: ITopBarProps) => {
    return (
        <header className='topbar'>
            <Link href='/'>
                <a className='logo'>
                    <img src='/images/logo.png' />
                    <h5 className='logo__heading'>Battleships</h5>
                </a>
            </Link>
            <Flexbox>
                <li>
                    <Link href='/sign-in'>
                        <a>
                            <h6>Sign in</h6>
                        </a>
                    </Link>
                </li>
            </Flexbox>
        </header>
    )
}

export default TopBar
