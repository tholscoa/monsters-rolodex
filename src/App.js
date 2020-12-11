import React from 'react';
import './App.css';
import { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list.component'
import { SearchBox } from '../src/components/searchbox/search-box.component'

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchMonster: ''
        }

        // this.testFunction2 = this.testFunction1.bind(this);
    }

    handleChange = (e) => {
        this.setState({ searchMonster: e.target.value })
        console.log(this.age)

    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => (this.setState({ monsters: data })))
    }


    // testFunction1(){
    //     console.log('Clicked 1 or 2')
    // }

    // testFunction3(){
    //     console.log('Clicked 3')
    // }
    // testFunction4(){
    //     console.log('Clicked 4')
    // }

    handleChange(e) {
        this.setState({ searchMonster: e.target.value })
    }
    // this will work without first binding handleChange to this
    // handleChange = (e) => {
    //     this.setState({searchMonster: e.target.value})
    // }
    render() {
        const { monsters, searchMonster } = this.state;
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()))

        return (
            <div className='App'>

                {/* <button onClick={this.testFunction1()}>Click 1</button>
                <button onClick={this.testFunction2}>Click 2</button>
                <button onClick={this.testFunction3}>Click 3</button>
                <button onClick={this.testFunction4}>Click 4</button> */}

                <SearchBox placeholder='Search' handleOnChange={this.handleChange} />
                {/* <input type='search' placeholder= "Search Monster" onChange={ e => (this.setState({ searchMonster: e.target.value }))} /> */}
                <CardList monsters={filterMonsters} />
            </div>

        )
    }


}

export default App;