import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid/v4'
import Joke from './Joke'
import './JokeList.css'


class JokesList extends Component {
    static defaultProps = {
        numJokes: 10
    }
    constructor(props) {
        super(props)

        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]"),
            loading: false
        }

        this.seenJokes = new Set(this.state.jokes.map(j => j.text))
    }

    componentDidMount(){
        if(this.state.jokes.length === 0) this.getJokes()
        
    }

    async getJokes() {
        try{
            let jokes = []
            while(jokes.length < this.props.numJokes){
                let url = "https://icanhazdadjoke.com/"
                let res = await axios.get(url,{
                headers:{Accept: "application/json"}
                })
                if(!this.seenJokes.has(res.data.joke)) jokes.push({id:uuid(),text:res.data.joke,votes:0})
                else 
                console.log(res.data.joke)
            }
            this.setState(st => ({
                jokes: [...jokes,...st.jokes],
                loading: false
            }),
            () => window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes))
            )
    } catch(e){
        alert(e);
        this.setState({loading:false})
    }
    }

    handleVote(id,delta){
        this.setState(st => (
            {
                jokes: st.jokes.map(j =>
                    j.id === id ?{...j,votes:j.votes+delta}:j
                    )
            }
        ),
        () => window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes))
        )
    }

    handleClick = ()=>{
        this.setState({loading:true},this.getJokes)
    }

    render() {
        if(this.state.loading){
            return (
                <div className="JokeList-spinner">
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                    <h1 className="JokeList-title">Loading...</h1>
                </div>
            )
        }

        let jokes = this.state.jokes.sort((a,b)=>b.votes-a.votes)
        return (
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'>
                         <span>Dad</span> Jokes
                    </h1>
                    <img
                    src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"></img>
                    <button className='JokeList-getmore' onClick={this.handleClick}>Fetch Jokes</button>
                </div>
    
                <div className="JokeList-jokes">
                    {jokes.map(j => 
                        <Joke
                        key={j.id}
                        votes={j.votes}
                        text={j.text}
                        upvote={()=>this.handleVote(j.id,1)}
                        downvote={()=> this.handleVote(j.id,-1)}
                        />
                    )}
                </div>

            </div>
        )
    }
}

export default JokesList