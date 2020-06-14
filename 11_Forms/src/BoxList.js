import React, { Component } from 'react';
import Box from './Box'
import Form from './Form'
import uuid from 'uuid/v4'

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {boxes:[]}
    }

    addBox = (st)=>{
        let box = {...st,id:uuid()}
        this.setState({boxes:[...this.state.boxes,box]})
    }

    removeBox = id =>{
        let boxes = this.state.boxes.filter(el => {
            return el.id!=id
        })
        this.setState({boxes:boxes})
    }

    render(){
        return(
            <div>
                <Form addBox={this.addBox}/>
                {this.state.boxes.map(el =>
                    <Box color={el.color} key={el.id} id={el.id} width={el.width} height={el.height} removeBox={this.removeBox}/>
                )}
            </div>
        )
    }
}

export default BoxList