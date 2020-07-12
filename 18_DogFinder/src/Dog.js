import React, { Component } from 'react'
import './Dog.css'

class Dog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='Dog'>
                <div className='Dog-card'>
                    <img className='Dog-pic' src={this.props.data.src}></img>
                    <h3>{this.props.data.name}</h3>
                    <p className='Dog-age'>{this.props.data.age} years old!</p>
                    <div className='Dog-facts'>
                        {this.props.data.facts.map(el => (
                            <p>{el}</p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dog