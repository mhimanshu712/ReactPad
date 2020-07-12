import React, { Component } from 'react'
import './Navbar.css'
import {Link,NavLink} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='Navbar'>
                <Link to='/' className='Navbar-logo'>DogBar</Link>
                <div className='Navbar-links'>
                    {this.props.data.map(el =>(
                        <NavLink to={`/dog/${el.name}`} activeClassName='Link-active'>{el.name}</NavLink>
                    ))}
                </div>
            </div>
        )
    }
}

export default Navbar