import React, { Component } from 'react'

class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const url = `https://source.unsplash.com/400x400/?${this.props.match.params.name}`
        return (
            <img src={url}/>
        )
    }
}

export default Food