import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <img src={this.props.img}></img>
        )
    }
}

export default Card