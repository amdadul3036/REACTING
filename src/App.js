import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nayok name = "Jasim"></Nayok>
        <Nayok name = "Shakib Khan"></Nayok>
        <Nayok name = "Salman Khan"></Nayok>
        <Nayok name = "Sahrukh Khan"></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
      </header>
    </div>
  );
}


function Nayok(props){
  return ( 
  <div style = {{border:'2px magenta solid', margin:'3px', padding:'5px', borderRadius:'10%', width:'75%', height:'200px'}}> 
            <h1 style ={{color:'tomato'}}>Nayok -- {props.name} </h1>
            <p>He has done about 5 movies</p>
         </div>
)}
export default App;
