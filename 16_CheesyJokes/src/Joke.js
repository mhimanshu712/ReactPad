import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    getColor(){ 
        if(this.props.votes >=15){
            return "#4CAF50"
        }else if(this.props.votes >= 12){
            return "#8BC34A"
        }else if(this.props.votes >= 9){
            return "#CDDC39"
        }else if(this.props.votes >= 6){
            return "#FFEB38"
        }else if(this.props.votes >= 3){
            return "#FFC107"
        }else if(this.props.votes >= 0){
            return "#FF9800"
        }else{
            return "#F44336"
        }
    }
    
    
    
    
    
    
    
    "em em-rolling_on_the_floor_laughing"
    "em em-laughing"
    "em em-smiley"
    "em em-slightly_smiling_face"
    "em em-neutral_face"
    "em em-confused"
    "em em-angry"
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.props.upvote}></i>
                    <span className='Joke-votes' style={{borderColor: this.getColor()}}>{this.props.votes}</span>
                    <i className='fas fa-arrow-down' onClick={this.props.downvote}></i>
                </div>

                <div className='Joke-text'>{this.props.text}</div>
                <div className="Joke-smiley">
                <i class="em em-rolling_on_the_floor_laughing" aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
                </div>
            </div>
        )
    }
}

export default Joke