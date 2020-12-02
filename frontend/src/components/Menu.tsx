import React from 'react'


interface IMenuProps {
    anchorEl: any
    children: any
}

const Menu = (props: IMenuProps) => {
    return (
        <ul className='menu'>
            {props.children}
        </ul>
    )
}

export default Menu
