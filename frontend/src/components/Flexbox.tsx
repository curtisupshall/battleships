import classNames from 'classnames'
import React, { CSSProperties } from 'react'

interface IFlexboxProps {
    children: any
    alignContent?: CSSProperties['alignContent']
    alignItems?: CSSProperties['alignItems']
    className?: string
    flexDirection?: CSSProperties['flexDirection']
    flexFlow?: CSSProperties['flexFlow']
    fullWidth?: boolean
    justifyContent?: CSSProperties['justifyContent']
}

const Flexbox = (props: IFlexboxProps) => {
    const { children, className, fullWidth, ...rest } = props

    return (
        <div className={classNames('flexbox', className, { '--fullWidth': fullWidth })} style={rest}>
            {children}
        </div>
    )
}

export default Flexbox
