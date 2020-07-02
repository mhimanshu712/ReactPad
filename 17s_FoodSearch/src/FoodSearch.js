import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

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

    handleClick = ()=>{
        // Do some work
        console.log('Work done')

        //then redirect
        this.props.history.push(`/food/${this.state.search}`)
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h1>Food Search!</h1>
                <input
                type="text"
                value={this.state.search}
                onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.search}`} >Go!</Link>
                <button onClick={this.handleClick} >Save</button>
             </div>
        )
    }
}

export default FoodSearch