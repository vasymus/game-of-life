import {getRandomId} from '../../helpers/common'


const randomId = store => next => action => {
    if (action.payload && action.payload.generateId) {
        let {...rest} = action.payload
        return next({
            ...action,
            payload : {
                ...rest,
                randomId : getRandomId()
            }
        })
    }
    next(action)
}

export default randomId
