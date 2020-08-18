import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

//another way to import directly
// class App extends React.Component{
class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: []
        }

        // this.state={ 
        //        monsters : [
        //         {
        //             name: "Frankenstein",
        //             id: '1'
        //         },
        //         {
        //             name: "Dracula",
        //             id: '2'
        //         },
        //         {
        //             name: "Zombie",
        //             id: '3'
        //         }
        //        ]
        // }
    }

    // fetch monsters using componentDidMount

   componentDidMount(){
       let typicode = 'https://jsonplaceholder.typicode.com/users';
       fetch(typicode).then(response=> response.json()).then(data => (this.setState({monsters:data})))
   }

    
    render(){
        return(
            <div className='root'>
                {this.state.monsters.map(monster=>(<h1 key={monster.id}>{monster.name}</h1>))} 
            </div>
        )
    }

    // render(){
    //     return(
    //         <div className='App'>
    //             {
    //                 this.state.monsters.map( monster => <h1 key= {monster.id}> {monster.name } </h1> )
    //             }
    //         </div>
    //     )
    // }
}

// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             String : "Initial text",
//         }
//     }

//     render(){
//         return(
//             <div className='App'>
//                 <img src={logo} />
//                 { this.state.String } <br/>
//                 <button onClick={()=>this.setState({String:"You've clicked once"})}>Change Text</button>
//             </div>
//         )
//     }
// }

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