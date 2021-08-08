import React, { Component } from 'react';
import '../App.css';
import Bao from '../image/bao.png';
import Keo from '../image/keo.png';
import Bua from '../image/bua.png';
import Player from '../image/player.png';
import PlayerComputer from '../image/playerComputer.png'
import {connect} from 'react-redux';


class GameComponent extends Component {

    state = {
        visibility: 'hidden',
        visibility1: 'hidden',
        imgSrc: '',
    }

    changeSrc = (cuoc) => {
        this.setState({
            imgSrc: `${cuoc}`,
            visibility: 'visible',
            visibility1: 'hidden',
        })
    }

    changeVisibility = () => {
        this.setState({
            visibility1: 'visible',
        })
    }

    render() {

        let {soBanChoi,soBanThang,ngauNhien} = this.props.oanTuTiReducer

       

        return (
            <div className="background"  style={{backgroundColor: "black"}}>
                <div className="col-4">
                <div>
                    <div className="player"> 
                        <div className="player__item">
                            <div className = "speech__item">
                                
                                    <img style={{visibility: `${this.state.visibility}`}} src={this.state.imgSrc} alt="" />
                                <div className = "speech__bubble">
                                </div>
                            </div>
                                <img src={Player} alt="hinhminhhoa" />
                            </div>
                            <div>
                                <button className="button__item" onClick = {() => {
                                    const action = {
                                        type: 'DAT_CUOC',
                                        banChon: 'Keo'
                                    }
                                    this.props.dispatch(action);
                                    this.changeSrc(Keo);
                                }}> <img src={Keo} alt="keo.png" /></button>
                                <button className="button__item" onClick = {() => {
                                    const action = {
                                        type: 'DAT_CUOC',
                                        banChon: 'Bua'
                                    }
                                    this.props.dispatch(action);
                                    this.changeSrc(Bua);
                                }}> <img src={Bua} alt="bua.png"/></button>
                                <button className="button__item" onClick = {() => {
                                    const action = {
                                        type: 'DAT_CUOC',
                                        banChon: 'Bao'
                                    }
                                    this.props.dispatch(action);
                                    this.changeSrc(Bao);
                                }}> <img src={Bao} alt="bao.png"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text"  className="col-4"> 
                    <div className="text__item">
                        <div >
                            <h1 className="text__title"> I'm iron man, i love you 3000 !!</h1>
                                <div className="text__container">
                                    <h1 className="text__info"> Số bàn thắng: <span> {soBanThang}</span></h1>
                                    <h1 className="text__info"> Số bàn chơi: <span> {soBanChoi}</span></h1>
                                </div>
                                <button className="playgame" onClick={()=> {
                                    const action = {
                                        type:'PLAY_GAME'
                                    }
                                    this.props.dispatch(action);
                                    this.changeVisibility();
                                }}> Play Game</button>
                            </div>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <div className="player__computer">
                            <div>
                                <div className="player__computer__item">
                                    <div className = "speech__item">
                                        <img style={{visibility: `${this.state.visibility1}`}} src={ngauNhien} alt="" />
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
        oanTuTiReducer: rootReducer.oanTuTiReducer
    }
}

export default connect(mapStateToProps)(GameComponent);