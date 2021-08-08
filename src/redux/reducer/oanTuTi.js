const stateDefault = {
    soBanChoi:0,
    soBanThang:0,
    hinhAnh:'',
    banChon:'',
    ngauNhien:'',

}

export const oanTuTiReducer = (state = stateDefault, action) => {
    console.log(action)
    switch(action.type){

        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            console.log("banChon",state.banChon)
            
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

            console.log("hinhAnh",state.hinhAnh)

            if(state.hinhAnh === 'Keo' && state.banChon === 'Bua'){
                state.soBanThang += 1;
            } else if (state.hinhAnh === 'Bao' && state.banChon === 'Keo'){
                state.soBanThang += 1;
            } else if (state.hinhAnh === 'Bua' && state.banChon === 'Bao'){
                state.soBanThang += 1;
            }

            if(state.hinhAnh === 'Keo'){
                state.ngauNhien = '../image/keo.png';
            } else if (state.hinhAnh === 'Bua'){
                state.ngauNhien = '../image/bua.png';
            } else if (state.hinhAnh === 'Bao') {
                state.ngauNhien = '../image/bao.png';
            }

            state.soBanChoi += 1;

            return {...state}
            
        }
        default: return state;
    }
}