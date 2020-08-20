import React from 'react';
import './App.css';
import { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list.component'

class App extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [ ]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => (this.setState({monsters:data})))
    }

    render(){
        return(
            <div className='App'>
                <CardList monsters= {this.state.monsters}/>
            </div>
        )
    }

    
}

export default App;