import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props)
        let rot = (Math.random()*101)/100
        let xPos = Math.random()*40 -20;
        let yPos = Math.random()*40 -20;
        this._trans = `translate(${xPos}px,${yPos}px) rotate(${rot}turn)`
    }

    render() {
        return (
            <img className="card" src={this.props.img} style={{transform:this._trans}}></img>
        )
    }
}

export default Card