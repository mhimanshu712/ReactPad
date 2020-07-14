import React, { Component } from 'react'
import './ColorBox.css'

class ColorBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {name,background} = this.props;
        return (
            <div style={{backgroundColor:background}} className='ColorBox'>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        )
    }
}

export default ColorBox