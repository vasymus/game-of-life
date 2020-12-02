import {appName} from '../../settings'
import {createSelector} from 'reselect'
import {Record, Map} from 'immutable'
import {arrayPrimitivesToMap, arrayToMap, isNumeric} from '../helpers/common'


/**
 * Constants
 * */

export const moduleName = 'history'
const prefix = `${appName}/${moduleName}`


/**
 * Reducer
 * */

const defaultState = {} // temp

export default (state = defaultState, action) => {
    let {type, payload} = action

    switch (type) {

        default : {
            return state
            break
        }
    }
}


/**
 * Selectors
 * */



/**
 * Action Creators
 * */



/**
 * Thunk
 * */
