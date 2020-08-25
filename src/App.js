import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [Nayoks,setNayoks] = useState([])
  useEffect(() => {
     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setNayoks(data))
  }, [])
  // const Nayoks = [{name:'Jasim', Movie: 5}, {name: 'Manna', Movie: 56}, {name: 'Jhankar Mahboob', Movie: 15}, {name: 'Bapparaz', Movie: 35},{name: 'Bappi Mozumder', Movie : 16},{name:'Alomgir',Movie: 78}];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCounter></MovieCounter>
        {
          Nayoks.map(nayok => <Nayok name = {nayok.name} key = {nayok.id} Movie = {nayok.Movie} ></Nayok> )
        }
      </header>
    </div>
  );
}


function Nayok(props){
  
  return ( 
  <div style = {{border:'2px magenta solid', margin:'3px', padding:'5px', borderRadius:'10%', width:'75%', height:'200px'}}> 
            <h1 style ={{color:'tomato'}}>Nayok -- {props.name}  </h1>
            <p>He has done about {props.Movie} movies</p>
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
