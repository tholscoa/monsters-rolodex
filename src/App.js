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

        // added to make this accessible to handleChange method
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => (this.setState({monsters:data})))
    }

    handleChange(e){
        this.setState({searchMonster: e.target.value})
    }
    // this will work without first binding handleChange to this
    // handleChange = (e) => {
    //     this.setState({searchMonster: e.target.value})
    // }
    render(){
        const { monsters, searchMonster } = this.state;
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()))

        return(
            <div className='App'>
                <SearchBox placeholder= 'Search' handleOnChange= { this.handleChange } />
                {/* <input type='search' placeholder= "Search Monster" onChange={ e => (this.setState({ searchMonster: e.target.value }))} /> */}
                <CardList monsters= { filterMonsters } /> 
            </div>
        )
    }

    
}

export default App;