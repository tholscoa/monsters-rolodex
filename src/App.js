import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react'


class App extends Component{
    constructor(){
        super();
        this.state = {
            String : "Initial text",
        }
    }

    render(){
        return(
            <div className='App'>
                <img src={logo} />
                { this.state.String } <br/>
                <button onClick={()=>this.setState({String:"Yes"})}>Change Text</button>
            </div>
        )
    }
}

// function App() {
//     return ( <
//         div className = "App" >
//         <header className = "App-header" >
//         <img src = { logo }
//         className = "App-logo"
//         alt = "logo" / >
//         <p>
//         Hello </p> 
//         <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer">
//         Learn React </a> </header> 
//         </div>
//     );
// }

export default App;