import React from 'react'

import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Tab,
    Tabs,
    TextField
} from '@material-ui/core'

import LoadingButton from '../components/LoadingButton'

const SignInPage = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordCheck, setPasswordCheck] = React.useState('')
    const [tab, setTab] = React.useState(0)
    const [loading, setLoading] = React.useState(false)

    const handleTabChange = (event: React.ChangeEvent<{}>, newTab: number) => {
        setTab(newTab);
      };

    const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        if (tab === 0) {
            // Sign in
        } else {
            // Register
        }
    }

    return (
        <Paper id='sign-in'>
            <form onSubmit={handleSignIn}>
                <DialogTitle>Sign in to Battleships</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please sign in below to play Battleships! If you don't have an account, you can create one.</DialogContentText>
                    <Tabs onChange={handleTabChange} value={tab} variant='fullWidth' indicatorColor='primary' disabled={loading}>
                        <Tab label='Sign In' value={0} />
                        <Tab label='Register' value={1} />
                    </Tabs>
                    {tab === 0 ? (
                        <div>
                            <TextField
                                name='username'
                                value={username}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setUsername(event.target.value)}
                                label='Username'
                                placeholder='Your Username'
                                type='text'
                                fullWidth
                                variant='filled'
                                color='primary'
                                margin='dense'
                                required
                                autoComplete='off'
                                disabled={loading}
                            />
                            <TextField
                                name='password'
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(event.target.value)}
                                label='Password'
                                placeholder='Your Password'
                                type='password'
                                fullWidth
                                variant='filled'
                                color='primary'
                                margin='dense'
                                required
                                autoComplete='off'
                                disabled={loading}
                            />
                        </div>
                    ) : (
                        <div>
                            <TextField
                                name='username'
                                value={username}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setUsername(event.target.value)}
                                label='Create a Username'
                                placeholder='Your Username'
                                type='text'
                                fullWidth
                                variant='filled'
                                color='primary'
                                margin='dense'
                                required
                                autoComplete='off'
                                disabled={loading}
                            />
                            <TextField
                                name='password'
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(event.target.value)}
                                label='Create a Password'
                                placeholder='Your Password'
                                type='password'
                                fullWidth
                                variant='filled'
                                color='primary'
                                margin='dense'
                                required
                                autoComplete='off'
                                disabled={loading}
                            />
                            <TextField
                                name='password-check'
                                value={passwordCheck}
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPasswordCheck(event.target.value)}
                                label='Retype your Password'
                                placeholder='Your Password'
                                type='password'
                                fullWidth
                                variant='filled'
                                color='primary'
                                margin='dense'
                                required
                                autoComplete='off'
                                disabled={loading}
                            />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <LoadingButton
                        type='submit'
                        color='primary'
                        variant='contained'
                        loading={loading}
                    >
                        {tab === 0 ? 'Sign In' : 'Register'}
                    </LoadingButton>
                </DialogActions>
            </form>
        </Paper>
    )
}

export default SignInPage
