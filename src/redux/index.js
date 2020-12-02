import {createStore, compose, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import createRootReducer from './reducer'
import thunk from 'redux-thunk'
import randomId from './middlewares/randomId'
import localData from './middlewares/localData'


export default function configureStore(preloadedState) {
    const middleware = [
        thunk,
        randomId,
        localData,
        //logger
    ]
    const store = createStore(
        createRootReducer(), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(...middleware),
        ),
    )

    return store
}
