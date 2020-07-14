import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'


class ColorBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            copied:false
        }
    }

    render() {
        const {name,background} = this.props;
        return (
            <CopyToClipboard text={background}>
                <div style={{backgroundColor:background}} className='ColorBox'>
                    <div style={{backgroundColor:background}} className='copy-overlay' />
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>More</span>
                </div>
            </CopyToClipboard>
            
        )
    }
}

export default ColorBox

