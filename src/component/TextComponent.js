import React, { Component } from 'react'


export default class TextComponent extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
