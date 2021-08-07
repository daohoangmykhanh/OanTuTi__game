import {combineReducers, createStore} from 'redux';
import { oanTuTiReducer } from './reducer/oanTuTi';

const rootReducer = combineReducers ({

    oanTuTiReducer:oanTuTiReducer

})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

