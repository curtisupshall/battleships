import { SET_USER } from '../actions/types'

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
        case SET_USER:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}
