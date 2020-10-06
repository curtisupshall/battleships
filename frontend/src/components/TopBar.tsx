import React from 'react'

interface ITopBarProps {

}

const TopBar = (props: ITopBarProps) => {
    return (
        <header className='topbar'>
            <div className='logo'>
                <img src='/images/logo.png' />
                <h6>Battleships</h6>
            </div>
        </header>
    )
}

export default TopBar
