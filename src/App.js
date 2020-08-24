import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Nayoks = ['Jasim','Manna','Maroof','Bapparaz','Razzak']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Nayok name = {Nayoks[0]}></Nayok>
        <Nayok name = {Nayoks[1]}></Nayok>
        <Nayok name = {Nayoks[2]}></Nayok>
        <Nayok name = {Nayoks[3]}></Nayok>
        <Nayok name = {Nayoks[4]}></Nayok>
        <Nayok name = {Nayoks[5]}></Nayok>
        <Nayok name = {Nayoks[6]}></Nayok>
      </header>
    </div>
  );
}


function Nayok(props){
  
  return ( 
  <div style = {{border:'2px magenta solid', margin:'3px', padding:'5px', borderRadius:'10%', width:'75%', height:'200px'}}> 
            <h1 style ={{color:'tomato'}}>Nayok -- {props.name}  </h1>
            <p>He has done about 5 movies</p>
         </div>
)}
export default App;
