import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'

class Deck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:0,
            cards:[{img:'https://deckofcardsapi.com/static/img/0D.png',rotation:0.2}],
            left:52
        }
        this.fetchCard = this.fetchCard.bind(this)
    }

    async componentDidMount() {
        let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
        let res = await axios.get(url)
        this.setState({id:res.data.deck_id})
        console.log(res.data)
    }

    async fetchCard(){
        let url = `https://deckofcardsapi.com/api/deck/${this.state.id}/draw/`
        // As soon as button is clicked decrease left
        this.setState(st => ({...st,left:st.left-1}))
        let res = await axios.get(url)
        res = res.data
        console.log(res)

        let img = res.cards[0].image
        this.setState(st => {
            let rot = (Math.random()*51)/100
            return {...st,cards:[...st.cards,{img:img,rotation:rot}]}
        })
    }

    handleClick = ()=>{
        if(this.state.id != 0){
            this.fetchCard()
        }
    }

    render() {
        return (
            <div>
                {this.state.left>0 &&
                    <button onClick={this.handleClick}>Fetch Card!</button>
                }
                <div className="deck">
                    {this.state.cards.map(el =>(
                        <Card img={el.img} rotation={el.rotation}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Deck