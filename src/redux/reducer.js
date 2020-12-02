import {combineReducers} from 'redux'
import game, {moduleName as gameModule} from "./modules/game";
import history, {moduleName as historyModule} from "./modules/history";


export default () => combineReducers({
    [gameModule] : game,
    [historyModule] : history,
})
