import React from 'react';
import './App.css';
import { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list.component'

class App extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [ ],
            searchMonster: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => (this.setState({monsters:data})))
    }

    render(){
        const { monsters, searchMonster } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()));

        return(
            <div className='App'>
                <input type='search' placeholder='Search Monster' onChange={ e => this.setState({searchMonster: e.target.value}) }></input>
                <CardList monsters= {filteredMonsters}/>
                {/* <CardList monsters= {this.state.monsters}/> */}
            </div>
        )
    }

    
}

export default App;