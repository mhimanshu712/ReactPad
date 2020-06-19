import React, { Component } from 'react'
import axios from 'axios'

class GitUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgUrl:null,
            name:null
        }
    }

    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`
        let res = await axios.get(url)
        let data = res.data
        this.setState({imgUrl:data.avatar_url,name: data.name})
    }

    render() {
        return (
           <div>
               <h1>Github User: {this.state.name}</h1>
               <img src={this.state.imgUrl}></img>
           </div> 
        )
    }
}

export default GitUser