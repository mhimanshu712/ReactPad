import React, { Component } from 'react';

class Rando extends Component {
    constructor(props){
        super(props);
        this.state = {num: 0,clicked:false}
        this.makeTimer()
        this.handleClick = this.handleClick.bind(this)
    }

    makeTimer(){
        setInterval(()=>{
            let rand = Math.random() * this.props.maxNum
            rand = Math.floor(rand)
            if(!this.state.clicked) this.setState({num:rand})
        },100)
    }

    handleClick(e){
        // this will not be defined here if handle click is not bound already
        // or handleClick = ()=>{}
        this.setState({clicked:true})
    }

    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>
                <br></br>
                <h2>{this.state.clicked?'Clicked':'Not clicked'}</h2>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default Rando