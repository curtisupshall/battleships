import classNames from 'classnames'
import React, { CSSProperties } from 'react'

interface IFlexboxProps {
    children: any
    alignContent?: CSSProperties['alignContent']
    alignItems?: CSSProperties['alignItems']
    className?: string
    flexDirection?: CSSProperties['flexDirection']
    flexFlow?: CSSProperties['flexFlow']
    justiftyContent?: CSSProperties['justifyContent']
}

const Flexbox = (props: IFlexboxProps) => {
    const { children, className, ...style } = props

    return (
        <div className={classNames('flexbox', className)} style={{ ...style }}>
            {children}
        </div>
    )
}

export default Flexbox
