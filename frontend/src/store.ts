// import { MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import { rootReducer } from './reducers'

export type RootState = ReturnType<typeof rootReducer>

// Creating initial store
export default (initialState: RootState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    )

    return store
}
