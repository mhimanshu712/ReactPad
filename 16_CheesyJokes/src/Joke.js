import React, { Component } from 'react'

class Joke extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='Joke'>
                <div className='Joke-button'>
                    <i className='fas fa-arrow-up'></i>
                    <span>{this.props.votes}</span>
                    <i className='fas fa-arrow-down'></i>
                </div>

                <div className='Joke-text'>{this.props.text}</div>
            </div>
        )
    }
}

export default Joke