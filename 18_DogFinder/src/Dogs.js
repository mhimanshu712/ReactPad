import React, { Component } from 'react'
import './Dogs.css'
import {Link} from 'react-router-dom'

class Dogs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='Dogs-container'>
                {this.props.data.map(el =>(
                    <div>
                        <Link to={`/dog/${el.name}`} className='link-item'>
                            <img src={el.src} className='Dog-image'></img>
                            <p className='Dog-name'>{el.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Dogs