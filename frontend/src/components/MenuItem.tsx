import React from 'react'

const MenuItem = (props: { children: any }) => {
    return (
        <li className='menu__item'>
            {props.children}
        </li>
    )
}

export default MenuItem
