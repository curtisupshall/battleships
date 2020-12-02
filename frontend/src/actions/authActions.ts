import { SET_USER } from './types'
import { Api } from '../Api'

export const fetchUsers = () => {
    return (dispatch: (action: any) => void) => {
        return Api.get('users').then((res) => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
    }
}

export const signOut = () => {
    return (dispatch: (action: any) => void) => {
        return Api.post('sign-out').then((res) => {
            dispatch({
                type: SET_USER,
                payload: null
            })
        })
    }
}