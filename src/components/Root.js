import React from 'react'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from '../redux'


const store = configureStore(/* provide initial state if any */)

// TODO dev only
window.__store = store

const Root = () => {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

export default Root
