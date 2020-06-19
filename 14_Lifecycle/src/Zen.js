import React, { Component } from 'react'
import axios from 'axios'
import './Zen.css'

class Zen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quote:null,
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/zen')
        .then(res => {
            setTimeout(()=>{
                this.setState({quote:res.data,isLoaded:true})
            },3000)
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoaded?
                <div>
                    <h1>Always remember...</h1>
                    <p>{this.state.quote}</p>
                </div>
                :
                <div className='poke'><div className="pokeball"><span></span></div></div>
                }
            </div>
        )
    }
}

export default Zen