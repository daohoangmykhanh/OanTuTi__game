const stateDefault = {
    soBanChoi:0,
    soBanThang:0,
    hinhAnh:'',
    banChon:'',
    display: 'none',
}

export const oanTuTiReducer = (state = stateDefault, action) => {
    console.log(action)
    switch(action.type){

        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return {...state};
        }

        case 'PLAY_GAME': {
            let soNgauNhien = Math.floor(Math.random() * 3) + 1;
            if (soNgauNhien === 1){
                state.hinhAnh = 'Keo';
            } else if (soNgauNhien === 2){
                state.hinhAnh = 'Bao';
            } else {
                state.hinhAnh = 'Bua';
            }

            console.log('state',state.hinhAnh)

            if(state.hinhAnh === 'Keo' && state.banChon === 'Bua'){
                state.soBanThang += 1;
            } else if (state.hinhAnh === 'Bao' && state.banChon === 'Keo'){
                state.soBanThang += 1;
            } else if (state.hinhAnh === 'Bua' && state.banChon === 'Bao'){
                state.soBanThang += 1;
            }

            state.soBanChoi += 1;
            

            return {...state}
            
        }
        default: return state;
    }
}