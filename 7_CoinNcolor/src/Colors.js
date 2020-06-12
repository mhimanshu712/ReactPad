import React, { Component } from 'react';
import Box from './Box'
import './Colors.css'

class Colors extends Component {
    constructor(props) {
        super(props)
        this.state = {boxes:Array.from({length:this.props.total})}
    }

    render() {
        let res = []
        for(let i=0;i<this.props.total;i++){
            let temp = <Box/>
            res.push(temp)
        }
        return(
            <div className="cont">
                {[...res]}
            </div>
        )
    }
}

export default Colors;