import React, { Component } from 'react'
import Bao from '../image/bao.png';
import Keo from '..//image/keo.png';
import Bua from '../image/bua.png';
import Player from '../image/player.png';
import {connect} from 'react-redux';

class PlayerComponent extends Component {
    render() {
        return (
            <div>
                <div>
                        <div className="player"> 
                            <div className="player__item">
                                <div className = "speech__item">
                                    <div className = "speech__bubble"></div>
                                </div>
                                <img src={Player} alt="hinhminhhoa" />
                            </div>
                            <div>
                                <button className="button__item"> <img src={Keo} alt="keo.png" /></button>
                                <button className="button__item"> <img src={Bua} alt="bua.png"/></button>
                                <button className="button__item"> <img src={Bao} alt="bao.png"/></button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return{
        luuTru: rootReducer.luuTruStateReducer
    }
}

export default connect(mapStateToProps)(PlayerComponent);
