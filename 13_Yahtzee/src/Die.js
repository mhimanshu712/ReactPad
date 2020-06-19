import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props)
    this.state = {isRolling:false}
  }

  handleClick = ()=>{
    this.setState({isRolling:true})
    setTimeout(()=>{
      this.setState({isRolling:false})
      this.props.handleClick(this.props.idx)
    },1000)
  }
  render() {
    const dig = ['','one','two','three','four','five','six']
    return (
      <i 
        className={`Die fas fa-dice-${dig[this.props.val]}
        ${this.props.locked && 'Die-locked'}
        ${this.state.isRolling && 'Die-rolling'}
        `}
        onClick={this.state.isRolling?null:this.handleClick}
      ></i>
    );
  }
}

export default Die;
