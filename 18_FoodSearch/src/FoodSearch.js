import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class FoodSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search:''
        }
    }

    handleChange = (e)=>{
        this.setState({search:e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Food Search!</h1>
                <input
                type="text"
                value={this.state.search}
                onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.search}`} >Go!</Link>
             </div>
        )
    }
}

export default FoodSearch