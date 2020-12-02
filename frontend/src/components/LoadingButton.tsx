import React from 'react'

import { Button, CircularProgress } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'

interface IProps extends ButtonProps {
    loading: boolean
}

const LoadingButton = (props: IProps) => {
    const { children, disabled, loading, ...rest } = props
    return (
        <Button {...rest} disabled={disabled || loading}>
            <div className='button-container'>
                {loading && (
                    <CircularProgress size={24} className='button-progress' />
                )}
                {children}
            </div>
        </Button>
    )
}

export default LoadingButton
