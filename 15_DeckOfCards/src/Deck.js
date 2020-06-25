import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'

class Deck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:0,
            cards:[{id:'007',img:'https://i.ibb.co/N1NzFH9/joker.png'}],
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
        try{
            let url = `https://deckofcardsapi.com/api/deck/${this.state.id}/draw/`
            // As soon as button is clicked decrease left
            //this.setState(st => ({...st,left:st.left-1}))
            // Colt used try catch instead
            let res = await axios.get(url)
            res = res.data
            if(!res.success){
                throw new Error('No cards left')
            }

            console.log(res)

            let card = res.cards[0]
            this.setState(st => {
                return {cards:[...st.cards,{id:card.code,img:card.image}]}
            })
        } catch (err){
            this.setState({left:0})
            console.log('No cards left')
        }
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
                    <button className="deck-btn" onClick={this.handleClick}>Fetch Card!</button>
                }
                <div className="deck">
                    {this.state.cards.map(el =>(
                        <Card 
                        key={el.id} 
                        img={el.img} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Deck