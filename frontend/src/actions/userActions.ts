import { FETCH_USER } from './types'
import { Api } from '../Api'

export const fetchUsers = () => {
    return (dispatch: (action: any) => void) => {
        return Api.get('users').then((res) => {
            dispatch({
                type: FETCH_USER,
                payload: res.data
            })
        })
    }
}