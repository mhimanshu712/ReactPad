import React from 'react';
import './App.css';
import whiskey from './imgs/whiskey.jpg'
import hazel from './imgs/hazel.jpg'
import tubby from './imgs/tubby.jpg'
import Dogs from './Dogs'
import Navbar from './Navbar'
import Dog from './Dog'
import Routes from './Routes'


class App extends React.Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  constructor(props){
    super(props)
  }

  render() {
  
    return (
      <div className="App">
        <Navbar data={this.props.dogs}/>
        <Routes dogs={this.props.dogs}/>
      </div>
    );
  }
}

export default App;
