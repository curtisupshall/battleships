import { FETCH_USER } from '../actions/types'

interface IState {
    item: any
    items: any[]
}

const initialState: IState = {
    item: null,
    items: []
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}
