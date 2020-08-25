import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Nayoks = ['Jasim','Manna','Maroof','Bapparaz','Razzak', 'Salman Khan', 'Jhankar']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
        {
          Nayoks.map(nayok => <Nayok name = {nayok}></Nayok> )
        }
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


function MovieDisplay(props){
  return <h4>Movies I have acted:{props.movies} </h4>
}

function MovieCounter(){
    const [movieCounter , setMovieCounter] = useState(1);
    const handleIncrease = () => {
      const newMovieCount = movieCounter + 1;
      setMovieCounter(newMovieCount);
    }
  return(
  <div>
    <button onClick = {handleIncrease}>Add Movie</button>
    <h1>No. of Movies: {movieCounter}</h1>
    <MovieDisplay movies = {movieCounter}></MovieDisplay>
  </div>
  )
}
export default App;
