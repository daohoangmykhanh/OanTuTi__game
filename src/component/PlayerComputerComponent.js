import React, { Component } from 'react'
import PlayerComputer from '../image/playerComputer.png'

export default class PlayerComputerComponent extends Component {
    render() {
        return (
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
        )
    }
}
