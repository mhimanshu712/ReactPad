import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
    render(){
        let url = [
            'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
            'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=1e370be4126e75f22ce38dd0db04cf0fd8f68637-1591877877-0-Aaja6MZcUJc-uAG8N9Bqth4_vRTo3ap5uvy2C9s9XyIoqKX6oVYbkTKGEniQT2j5uFeDMAtT3pDhJwoYQNo04ZnQriPFsNh2QEE2oM7t7ObGn9Hk9Vw7vyCuGwKIuWiMfiGHa_Al9ZAQKsukLvBdGIwqA3VzhToxWOL5tCxBmG4QVGb8nWEiQLP5HJj1A3V0S2xi5iqdXe5KBoZNeVQ0UuS7Jp84xXbwvoy091FKj9dqPvPhIBWyZU480Xz_XVUbD1gCR3sFY8taRaA8d5wOxU6gP3tifFA-4W93VgJMwOOisidzPuDqZwPQwK8Br54k0g',
        ]

        return(
            <span>{this.props.total && <img className='coin' src={url[this.props.val]}></img>}</span>
        )
    }
}

export default Coin