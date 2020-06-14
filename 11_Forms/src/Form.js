import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {color:'pink',width:50,height:50}
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        this.props.addBox(this.state)
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add A Box!</label>
                <br></br>
                <input name='width' type='text' placeholder='width' value={this.state.width} onChange={this.handleChange}></input>
                <br></br>
                <input name='height' type='text' placeholder='height' value={this.state.height} onChange={this.handleChange}></input>
                <br></br>
                <input name='color' type='text' placeholder='color' value={this.state.color} onChange={this.handleChange}></input>
                <br></br>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form