import React, { Component } from 'react';
import Coin from './Coin'
import './Tosscoin.css'

class Tosscoin extends Component{
    constructor(props) {
        super(props)
        this.state = {total:0,heads:0,curr:-1}
    }

    handleClick = ()=>{
        let val = Math.floor(Math.random() * 2);
        this.setState(st => ({
            total: st.total+1,
            curr: val,
            heads: st.heads + (val?0:1)
        }))
    }

    render() {
        return(
            <div>
                <h1>Flip It!</h1>
                <div class="cont">
                    <Coin val={this.state.curr} total={this.state.total}/>
                        <button onClick={this.handleClick}>Toss Coin</button>
                        {(this.state.total > 0) && (
                            <p>You got {this.state.heads} heads in a total of {this.state.total} tosses.</p>
                        )}
                </div>

            </div>
        )
    }

}

export default Tosscoin