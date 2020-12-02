import React from 'react'
import Link from 'next/link'

import {
    AppBar,
    Avatar,
    Button,
    ButtonBase,
    Icon,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@material-ui/core'

import { signOut } from '../actions/authActions'

import Flexbox from './Flexbox'

interface IReduxProps {
    user: any
    signOut: () => Promise<any>
}

const TopBar = (props: IReduxProps) => {
    const { user } = props

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const menuOpen: boolean = Boolean(anchorEl)

    const handleClickUser = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleSignOut = () => {
        props.signOut().then(() => {
            handleCloseMenu()
            //
        }, (err: any) => {
            //
        })
    }

    return (
        <AppBar position='static' className='topbar'>
            <Toolbar>
                <Flexbox alignItems='center' justifyContent='space-between' fullWidth>
                    <Link href='/'>
                        <a className='logo'>
                            <img src='/images/logo.png' />
                            <h5 className='logo__heading'>Battleships</h5>
                        </a>
                    </Link>
                    {props.user ? (
                        <>
                            <ButtonBase onClick={handleClickUser}>
                                <Flexbox>
                                    <Avatar><Icon>user</Icon></Avatar>
                                    <Typography variant='h6'>{'{username}'}</Typography>
                                </Flexbox>
                            </ButtonBase>
                            <Menu open={menuOpen} anchorEl={anchorEl} onClose={handleCloseMenu}>
                                <MenuItem disabled={loading} onClick={() => handleSignOut()}>Sign Out</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Link href='/sign-in'>
                            <a>
                                <Button color='inherit' variant='text'>Sign In</Button>
                            </a>
                        </Link>
                    )}
                </Flexbox>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user
})

const mapDispatchToProps = ({
    signOut
})

export default TopBar
