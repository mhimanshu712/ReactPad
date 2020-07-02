import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const name = this.props.match.params.name
        const url = `https://source.unsplash.com/500x500/?${name}`
        return (
            <div>
                {/\d/.test(name) ?
                <Redirect to='/' />
                :
                <img src={url}/>
                }
            </div>
        )
    }
}

export default Food