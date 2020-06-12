import React, { Component } from 'react';

class ButtonList extends Component {
    static defaultProps = {
        colors: ["#e056fd","#eb4d4b","#badc58","#f0932b"]
    }

    constructor(props){
        super(props)
        this.state = {color:'pink'}
    }

    changeColor = (newColor)=>{
        this.setState({color:newColor});
    }

    handleMouse = ()=>{
        console.log('The color will be changed!')
    }

    render(){
        return(
            <div className='ButtonList' style={{backgroundColor:this.state.color}}>
                {this.props.colors.map(c => {
                    const colorObj = {backgroundColor: c}
                    return(
                        <button style={colorObj} onClick={this.changeColor.bind(this,c)} onMouseEnter={this.handleMouse}>
                            Click on me!
                        </button>
                    )
                })}
            </div>
        )
    }
}

export default ButtonList