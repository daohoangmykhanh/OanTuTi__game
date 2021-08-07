import {combineReducers, createStore} from 'redux';


const luuTruState = [
    {luaChon: '', soBanThang: 0, soBanChoi: 0}
]

const rootReducer = combineReducers ({

    luuTruStateReducer: (state = luuTruState) => {
        return state;
    }

})

export const store = createStore(rootReducer);

