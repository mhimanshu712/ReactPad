import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {color:Math.floor(Math.random()*9)}
    }

    handleClick = ()=>{
        let rand = Math.floor(Math.random() * 9)
        this.setState({color:rand})
    }
    render() {
        return(
            <div class={'box color-'+this.state.color} onClick={this.handleClick}>
            </div>
        )
    }
}

export default Box