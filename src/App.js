import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nayok></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
      </header>
    </div>
  );
}


function Nayok(){
  return <div style = {{border:'2px magenta solid', margin:'3px', padding:'5px', borderRadius:'10%'}}> 
            <h1 style ={{color:'tomato'}}>KholNayok is Comming</h1>
            <p>I have done about 5 movies</p>
         </div>
}
export default App;
