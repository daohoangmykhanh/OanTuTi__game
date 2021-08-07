import React, { Component } from 'react';
import '../App.css';
import PlayerComponent from './PlayerComponent';
import TextComponent from './TextComponent';
import PlayerComputerComponent from './PlayerComputerComponent';

export default class GameComponent extends Component {
    render() {
        return (
            <div className="background"  style={{backgroundColor: "black"}}>
                <div className="col-4">
                    <PlayerComponent></PlayerComponent>
                </div>
                <div className="text"  className="col-4"> 
                    <TextComponent></TextComponent>
                </div>
                <div className="col-4">
                   <PlayerComputerComponent></PlayerComputerComponent>
                </div>
            </div>
        )
    }
}
