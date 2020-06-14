import React, {Component} from 'react'
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = ()=>{
        this.props.removeBox(this.props.id)
        console.log('props key ',this.props.id)
    }

    render() {
        return (
            <div>
                <div className="box" style={{
                    backgroundColor:this.props.color,
                    width:`${this.props.width}px`,
                    height:`${this.props.height}px`
                }}>
                </div>
                <button onClick={this.handleClick}>Remove</button>
            </div>
        )
    }
}

export default Box