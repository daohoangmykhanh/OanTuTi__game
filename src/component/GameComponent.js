import React, { Component } from 'react';
import '../App.css';
import Bao from '../image/bao.png';
import Keo from '..//image/keo.png';
import Bua from '../image/bua.png';
import Player from '../image/player.png';
import {connect} from 'react-redux';
import PlayerComputer from '../image/playerComputer.png'

class GameComponent extends Component {
    render() {
        return (
            <div className="background"  style={{backgroundColor: "black"}}>
                <div className="col-4">
                <div>
                        <div className="player"> 
                            <div className="player__item">
                                <div className = "speech__item">
                                    <img src="" alt="" />
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
                <div className="text"  className="col-4"> 
                <div className="text__item">
                        <div >
                            <h1 className="text__title"> I'm iron man, i love you 3000 !!</h1>
                            <div className="text__container">
                                <h1 className="text__info"> Số bàn thắng:</h1>
                                <h1 className="text__info"> Số bàn chơi: </h1>
                            </div>
                            <button className="playgame"> Play Game</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                <div>
                    <div className="player__computer">
                        <div>
                            <div className="player__computer__item">
                                <div className = "speech__item">
                                    <div className = "speech__bubble"></div>
                                </div>
                                    <img src={PlayerComputer} alt="hinhminhhoa" />
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return{
        luuTruState: rootReducer.luuTruStateReducer
    }
}

export default connect(mapStateToProps)(GameComponent);