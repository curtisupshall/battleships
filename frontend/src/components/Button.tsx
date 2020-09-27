import React from 'react'

interface IButtonProps {
    children: any
}

const Button = (props: IButtonProps) => {
    return (
        <button className='button'>
            {props.children}
        </button>
    )
}

export default Button
