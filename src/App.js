import React from 'react';
import './App.css';
import { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list.component'
import { SearchBox } from '../src/components/searchbox/search-box.component'

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
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()))

        return(
            <div className='App'>
                <SearchBox placeholder= 'Search' handleOnChange= { e => (this.setState({SearchMonster: e.target.value}))} />
                {/* <input type='search' placeholder= "Search Monster" onChange={ e => (this.setState({ searchMonster: e.target.value }))} /> */}
                <CardList monsters= { filterMonsters } /> 
            </div>
        )
    }

    
}

export default App;