import React, { CSSProperties } from 'react'

interface IFlexboxProps {
    children: any
    alignContent?: CSSProperties['alignContent']
    alignItems?: CSSProperties['alignItems']
    flexDirection?: CSSProperties['flexDirection']
    flexFlow?: CSSProperties['flexFlow']
    justiftyContent?: CSSProperties['justifyContent']
}

const Flexbox = (props: IFlexboxProps) => {
    const { children, ...style } = props

    return (
        <div className='flexbox' style={{ ...style }}>
            {children}
        </div>
    )
}

export default Flexbox
