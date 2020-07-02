import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    handleLogin = ()=>{
        alert('Logged you in')
        this.props.history.push('/food/salmon')
    }

    render() {
        return (
           <div>
               <button onClick={this.handleLogin}>Log In</button>
           </div> 
        )
    }
}

export default withRouter(Navbar)